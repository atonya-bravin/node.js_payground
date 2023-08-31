const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello Bravin!");
});

server.listen(4000);
