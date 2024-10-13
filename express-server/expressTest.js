const express = require("express");
const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.set({"Content-Type" : "text/html; charset=utf-8"});
    res.end("hello express");
});

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});