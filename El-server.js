let http = require("http");

let server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello Atharva");
});

server.listen(5000, () => {
  console.log("server listening on port :5000...");
});
