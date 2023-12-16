const fs = require("fs");
const path = require("node:path");

// Icons 폴더 경로
const iconsDir = path.resolve(
  __dirname,
  "../../src/lib/common/components/Icons"
);

// 폴더 목록 가져오기
const folders = fs
  .readdirSync(iconsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const code = folders
  .map((folder) => `export * as ${folder} from './${folder}';`)
  .join("\n");

fs.writeFileSync(path.join(iconsDir, "index.ts"), code);
