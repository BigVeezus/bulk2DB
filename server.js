var zstd = require("node-zstandard");
const fs = require("fs");
const { ZSTDDecompressMaybe } = require("simple-zstd");

zstd.decompress(
  "./file.zst", //----------> ZST bulk file to be decompressed
  "./file.json", //---------> name of new json file you want to save after decompressing it
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);
