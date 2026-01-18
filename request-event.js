let http = require("http");

// let server = http.createServer((req, res) => {
//   res.end("Wlc");
// });

let server=http.createServer()
server.on('request',(req,res)=>{
    res.end("wlc")
})

server.listen(5000,()=>{
    console.log("Server is working fine...")
});
