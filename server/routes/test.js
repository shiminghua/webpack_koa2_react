import koaRouter from 'koa-router';
const router = koaRouter();

router.get('/test', async (ctx) => {
    ctx.state = {
        title: 'koa2 title test'
    };
    console.log(ctx.session.userName);
    await ctx.render('test/index');
});

router.get('/test/:id', (ctx) => {
    // console.log(ctx.query, ctx.params, ctx.request.body);
    // ctx.state = {
    //     title: 'koa2 scheme test',
    // };
    // await ctx.render('test/index');
    ctx.body = {
        title: 'koa2',
        id: ctx.params.id
    };
});

router.post('/test', async (ctx) => {
    // console.log(ctx.query, ctx.params, ctx.request.body);
    ctx.state = {
        title: 'koa2 scheme test post',
        id: ctx.request.body.id
    };
    await ctx.render('test/post');
});

module.exports = router;
// export default router;