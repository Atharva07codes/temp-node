let { createReadStream } = require("fs");

let stream = createReadStream("./Atharva/BigFile.txt", {
  highWaterMark: 900,
  encoding: "utf-8",
});
stream.on("data", (res) => {
  console.log(res);
});
stream.on('error',(err) => {
  console.log(err);
});
