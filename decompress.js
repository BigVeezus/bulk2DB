const fs = require("fs");
const connectDB = require("./db");
require("dotenv").config();

const Schema = require("./schema.js");
connectDB();
var stream = fs.createReadStream("./file.json", {
  flags: "r",
  encoding: "utf-8",
});
var buf = "";

stream.on("data", function (d) {
  buf += d.toString(); // when data is read, stash it in a string buffer
  pump();
});

function pump() {
  var pos;

  while ((pos = buf.indexOf("\n")) >= 0) {
    // keep going while there's a newline somewhere in the buffer
    if (pos == 0) {
      // if there's more than one newline in a row, the buffer will now start with a newline
      buf = buf.slice(1); // discard it
      continue; // so that the next iteration will start with data
    }
    processLine(buf.slice(0, pos)); // hand off the line
    buf = buf.slice(pos + 1); // and slice the processed data off the buffer
  }
}

async function processLine(line) {
  if (line[line.length - 1] == "\r") line = line.substr(0, line.length - 1); // discard CR (0x0D)

  if (line.length > 0) {
    var obj = JSON.parse(line);
    console.log(obj);
    await Schema.create(obj);
  }
}
