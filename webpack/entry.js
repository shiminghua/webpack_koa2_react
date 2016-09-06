'use strict';
const path = require('path');
const config = require('./config');
const filePaths = require('./filePaths'); 

// 创建entry对象
let entry = Object.create(null);
/*******
 * entry
 */
function getEntry () {
    // 同步获取入口文件地址的数组
    let objPaths = filePaths.getPaths(config.js, path.join(config.client, '/resources/'));
    // 遍历数组设置entry属性
    for (let key in objPaths) {
        // console.log(key.replace('\\', '/'))
        entry[key] = [objPaths[key]];
    }

    // 提取React,jQuery等库文件
    // entry.react = ['react', 'react-dom'];
    for(let key in config.commonChunk) {
        entry[key] = config.commonChunk[key];
    }
    return entry;
}

entry = getEntry();

module.exports = entry;