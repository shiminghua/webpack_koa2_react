/********
 * koa-router-cache 的配置文件
 */
import routerCache from 'koa-router-cache';
let MemoryCache = routerCache.MemoryCache;
const CacheConfig = {
    'GET /': {
        key: 'cache:index',
        expire: 5 * 1000,
        get: MemoryCache.get,
        set: MemoryCache.set,
        passthrough: MemoryCache.passthrough,
        evtName: 'clearIndexCache',
        destroy: MemoryCache.destroy
    }
};

export default CacheConfig;