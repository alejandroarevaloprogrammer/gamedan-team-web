
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export async function getGameImageDimensions(imagePath: string) {
  const fullPath = path.join(
    process.cwd(),
    "public",
    imagePath.replace(/^\/+/, ""),
  );

  const buffer = await fs.readFile(fullPath);
  const metadata = await sharp(buffer).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to read image dimensions: ${imagePath}`);
  }

  return {
    width: metadata.width,
    height: metadata.height,
  };
}
