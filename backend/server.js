const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hallo vom Backend!" }));
  })
  .listen(3000);