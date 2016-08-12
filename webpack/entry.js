'use strict';
const path = require('path');
const glob = require('glob');
const config = require('./config');

// 创建entry对象
let entry = Object.create(null);
/*******
 * entry
 */
function getEntry () {
    // 获取路径
    const jsPath = path.join(config.clientSrc, '/**/*index.js');
    // 同步获取入口文件地址的数组
    let arrPaths = glob.sync(jsPath);
    // 遍历数组设置entry属性
    arrPaths.forEach(function(path) {
        entry[getEntryKey(path)] = [path];
    });

    // 提取React,jQuery等库文件
    // entry.react = ['react', 'react-dom'];
    for(let key in config.commonChunk) {
        entry[key] = config.commonChunk[key];
    }
}

/********
 * 获取entry的key值
 */
function getEntryKey(jspath) {
    // 标准化路径
    let clientSrc = path.join(config.clientSrc, '/');
    let winPath = path.normalize(jspath);
    // 去除顶层路径 config.clientSrc
    let resultPath = winPath.replace(clientSrc, '');
    // 获取key值
    let key = path.dirname(resultPath);
    return key;
}

getEntry();

module.exports = entry;