import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { ViteDevServer } from "vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

const rootDir = import.meta.dirname;

function icsMimePlugin() {
  const applyIcsHeaders = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const pathname = req.url?.split("?")[0] ?? "";
    if (pathname.endsWith(".ics")) {
      res.setHeader("Content-Type", "text/calendar; charset=utf-8");
      res.setHeader("Content-Disposition", "inline");
    }
    next();
  };

  const useOn = (server: ViteDevServer) => {
    server.middlewares.use(applyIcsHeaders);
  };

  return {
    name: "ics-mime",
    configureServer: useOn,
    configurePreviewServer: useOn,
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, "");

  return {
    root: path.resolve(rootDir, "client"),
    envDir: rootDir,
    base: env.VITE_BASE || "/",
    plugins: [
      icsMimePlugin(),
      react(),
      tailwindcss(),
      imagetools({
        defaultDirectives: (url) => {
          if (url.searchParams.get("as") === "picture") {
            return new URLSearchParams({
              format: "avif;webp",
              quality: "82",
              w: "800;1280;1920",
            });
          }
          return new URLSearchParams();
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "client/src"),
      },
    },
    build: {
      outDir: path.resolve(rootDir, "dist"),
      emptyOutDir: true,
      assetsInlineLimit: 0,
    },
  };
});
