'use strict';
const path = require('path');
const glob = require('glob');
const config = require('./config');

// 创建entry对象
let entry = Object.create(null);
/*******
 * entry
 */
function getPaths (pattern) {
    // 同步获取入口文件地址的数组
    let arrPaths = glob.sync(pattern);
    // 遍历数组设置entry属性
    arrPaths.forEach(function(path) {
        entry[getEntryKey(path)] = [path];
    });
}

/********
 * 获取entry的key值
 */
function getKey(jspath) {
    // 标准化路径
    let clientSrc = path.join(config.clientSrc, '/');
    let winPath = path.normalize(jspath);
    // 去除顶层路径 config.clientSrc
    let resultPath = winPath.replace(clientSrc, '');
    // 获取key值
    let key = path.dirname(resultPath);
    return key;
}

// 获取路径
const jsPath = path.join(config.clientSrc, '/**/*index.js');
getEntry(jsPath);

module.exports = {
    getPaths: getPaths
};