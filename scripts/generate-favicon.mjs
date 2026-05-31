import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const toIco = (await import("to-ico")).default;
const inputs = ["favicon-48.png", "favicon-96.png"].map((name) =>
  readFile(path.join(publicDir, name)),
);
const ico = await toIco(await Promise.all(inputs));
await writeFile(path.join(publicDir, "favicon.ico"), ico);
console.log(`Wrote favicon.ico (${ico.length} bytes)`);
