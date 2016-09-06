const koa = require('koa');
const cache = require('koa-router-cache');
const convert = require('koa-convert');

const MemoryCache = cache.MemoryCache;
let app = new koa();

let count = 0;

app.use(convert(cache(app, {
    'GET /': {
        key: 'cache:index',
        expire: 5 * 1000,
        get: MemoryCache.get,
        set: MemoryCache.set,
        passthrough: MemoryCache.passthrough,
        evtName: 'clearIndexCache',
        destroy: MemoryCache.destroy
    }
})));

app.use((ctx) => {
  ctx.body = count++;
  if (count === 3) {
    count = 0;
    ctx.app.emit('clearIndexCache');
  }
});
 
app.listen(3000, function () {
  console.log('listening on 3000.');
});
