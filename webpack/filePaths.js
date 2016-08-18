'use strict';
const path = require('path');
const glob = require('glob');
const config = require('./config');

/*******
 * paths
 */
function getPaths(path, delPath) {
    let objPaths = Object.create(null); // 数组保存的单个对象
    // 同步获取入口文件地址的数组
    let arrGlobPaths = glob.sync(path);
    // 遍历数组设置值
    arrGlobPaths.forEach(function (path) {
        objPaths[getKey(path, delPath)] = path;
    });

    return objPaths;
}

/********
 * 获取entry的key值
 */
function getKey(jspath, delPath) {
    // 标准化路径
    let winPath = path.normalize(jspath);
    // 去除顶层路径 config.clientSrc
    let resultPath = winPath.replace(delPath, '');
    // 获取key值
    let key = path.dirname(resultPath);
    return key;
}

module.exports = {
    getPaths: getPaths
};