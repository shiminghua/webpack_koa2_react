const path = require('path');

/***************
 * 配置文件
 */
const baseConfig = {
    host: '127.0.0.1', 
    port: 3000,
    commonChunk: {
        react: ['react', 'react-dom'],
        // jquery: ['jquery'],
    },
    root: path.join(__dirname, '../')
};

const buildConfig = {
    build: path.join(baseConfig.root, '/build'),
    dist: path.join(baseConfig.root, '/dist'),
    app: path.join(baseConfig.root, '/app'),
    client: path.join(baseConfig.root, '/client'),
    server: path.join(baseConfig.root, '/server'),
    http: 'http://' + baseConfig.host + (baseConfig.port ? (':' + baseConfig.port) : '') + '/',
    publicPath: 'http://' + baseConfig.host + (baseConfig.port ? (':' + baseConfig.port) : '') + '/',
    html: path.join(baseConfig.root, '/views/**/*.html')
};

const config = Object.assign({}, baseConfig, buildConfig);

// console.log(config);

module.exports = config;