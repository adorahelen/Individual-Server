const http =require("http");
const url = require("url");

http.
    createServer((req, res) => {
        const path = url.parse(req.url, true).pathname; // true == quaryString 
        res.setHeader("Content-Type", "text/html");

        if (path === "/user") {
            res.end("[user] name : andy, age: 30");
        } 
        else if (path === "/feed") {
            res.end(" univers ~~~ ");
        }
        else {
            res.statusCode = 404;
            res.end("404 page not found");
        }
    })
    .listen("3000", ( )=> console.log(" make the router !!!!!"))