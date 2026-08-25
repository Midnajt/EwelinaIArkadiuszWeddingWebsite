import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "client/public");
const assetsDir = path.join(root, "client/assets");

await sharp(path.join(assetsDir, "beach.png"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .png({ quality: 85, compressionLevel: 9 })
  .toFile(path.join(publicDir, "images/og-image.png"));

const logo = sharp(path.join(assetsDir, "logo_gold.png")).resize(512, 512, {
  fit: "contain",
  background: { r: 249, g: 244, b: 236, alpha: 1 },
});

await logo.clone().resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
await logo.clone().resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));
await logo
  .clone()
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));
await logo
  .clone()
  .resize(32, 32)
  .toFile(path.join(publicDir, "favicon.ico"));

console.log("Generated og-image.png and favicon assets");
