const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {
    console.log(count += 1);  // Increment and log the count

    res.statusCode = 200;      // Set HTTP status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain');  // Set content type header
    res.end('Hello, world!\n');  // Send response body and end the response
});

const port = 3000;  // Define the port

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});