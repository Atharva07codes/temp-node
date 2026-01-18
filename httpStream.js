let http = require("http");
var fs = require("fs");

http
  .createServer(function (request, result) {
    // let text = fs.readFileSync("./Atharva/BigFile.txt", "utf-8");
    // res.end(text);
    let stream = fs.createReadStream("./Atharva/BigFile.txt", "utf-8");
    stream.on("data", (res) => {
      stream.pipe(result);
    });
    stream.on("error", (err) => {
      result.end(err);
    });
  })
  .listen(5000);
