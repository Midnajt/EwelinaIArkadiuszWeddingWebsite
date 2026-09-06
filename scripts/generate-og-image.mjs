import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "client/assets/restaurant.png");
const outDir = path.join(root, "client/public/images");
const out = path.join(outDir, "og-image.png");

const OG_W = 1200;
const OG_H = 630;
const OG_RATIO = OG_W / OG_H;

const meta = await sharp(src).metadata();
const width = meta.width ?? 0;
const height = meta.height ?? 0;
if (!width || !height) throw new Error("Nie udało się odczytać wymiarów restaurant.png");

let extract;
if (width / height > OG_RATIO) {
  const cropW = Math.round(height * OG_RATIO);
  extract = { left: Math.round((width - cropW) / 2), top: 0, width: cropW, height };
} else {
  const cropH = Math.round(width / OG_RATIO);
  extract = {
    left: 0,
    top: Math.round((height - cropH) / 2),
    width,
    height: cropH,
  };
}

fs.mkdirSync(outDir, { recursive: true });

await sharp(src)
  .extract(extract)
  .resize(OG_W, OG_H, { fit: "fill" })
  .png({ quality: 85, compressionLevel: 9 })
  .toFile(out);

console.log(
  `og-image.png ${OG_W}x${OG_H} z kadr ${extract.width}x${extract.height} @ ${extract.left},${extract.top} (źródło ${width}x${height})`,
);
