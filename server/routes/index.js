const router = require('koa-router')();

router.get('/', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title 666'
    };
    await ctx.render('index', {  });
});

router.get('/js', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title js'
    };
    await ctx.render('index', {  });
});

module.exports = router;