import path from 'path';
// koa-router-cache 配置
import configCacheRouter from './cache.router';

const config = {
    /**
     * app.keys
     */
    keys: ['koa2_react'],
    /**
     * render locals
     */
    locals: {
        "name": "Node.js-club",
        "version": "0.0.1",
        "description": "一个分享与发现的地方",
        "locale": "zh-cn",
        "tabs": ["全部", "问答", "分享", "吐槽", "招聘"],
        "dependencies": {
            "gravatar": "1.1.0",
            "moment": "2.9.0",
            "markdown-it": "4.0.3"
        }
    },
    /***
     * 服务器配置
     */
    server: {
        http: 'http://127.0.0.1:3000/',
        path: path.join(__dirname, '../'),
        host: '127.0.0.1',
        port: 3000
    },
    /***
     * 数据库配置
     */
    db: {
        // mongodb 数据库
        mongodb: {
            url: 'mongodb://127.0.0.1/koa2_react'
        },
        // redis 数据库
        redis: {
            port: 6379,          // Redis port 
            host: '192.168.136.131',   // Redis host 
            family: 4,           // 4 (IPv4) or 6 (IPv6) 
            password: 'my_redis',
            db: 0
        },
        // mysql 数据库
        mysql: {

        }
    },
    /***
     * 缓存配置
     */
    cache: {
        // 路由缓存 koa-router-cache
        router: configCacheRouter
    }
};

module.exports = config;