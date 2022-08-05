/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs").promises;
const path = require("path");

const sharp = require("sharp");

const convert = async (inputPath, outputDir) => {
  const obj = path.parse(inputPath);
  const outputPath = path.join(outputDir, `${obj.name}.avif`);
  try {
    await sharp(inputPath).avif({ quality: 20 }).toFile(outputPath);
  } catch (err) {
    console.error(err);
  }
};

const resize = async (inputPath, outputDir) => {
    const obj = path.parse(inputPath);
    const outputPath = path.join(outputDir, `${obj.name}.avif`);
    try {
      await sharp(inputPath).resize(2000).toFile(outputPath);
    } catch (err) {
      console.error(err);
    }
};

const main = async () => {
  if (process.argv.length != 4) {
    console.log("node convert.js [input dir] [output dir]");
    process.exit(1);
  }

  const inputDir = process.argv[2];
  const outputDir = process.argv[3];
  try {
    const files = await fs.readdir(inputDir);
    const promises = files.map((file) => {
      console.log(`process ${file}`);
      const inputPath = path.join(inputDir, file);
      return resize(inputPath, outputDir);
    });
    await Promise.all(promises);
    console.log("completed");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();
