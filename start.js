require("babel-core/register");
require("babel-polyfill");

const http = require('http');


const app = require("./test.js");

const port = 3000;

// const server = http.createServer(app.callback);

app.listen(port, () => {
    console.log('node服务器开启：port=' + port);
});