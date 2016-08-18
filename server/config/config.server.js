const path = require('path');
const config = {
    server: {
        path: path.join(__dirname, '../server'),
        port: 3000
    },
    db: 'mongodb://127.0.0.1/gen-koa2'
};

module.exports = Object.assign({}, config);