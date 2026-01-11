let { createServer } = require("http");
let server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Wlc To First WB created using node");
  } else if (req.url === "/about") {
    res.end("Here you can see about us !!!");
  } else {
    res.end(
      `<h1>Opps :) </h1>
        <p>The page is under construction </p>
        <a href="/">Back Home</a>
        `
    );
  }
});
server.listen(5000);
