import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = import.meta.dirname;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, "");

  return {
    root: path.resolve(rootDir, "client"),
    envDir: rootDir,
    base: env.VITE_BASE || "/",
    plugins: [react(), tailwindcss()],
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
