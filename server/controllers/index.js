
let count = 0;

class Index {

    constructor(props) {

    }

    async index(ctx) {
        // ctx.redirect('/test');
        if (count >= 4) {
            count = 0;
            ctx.app.emit('clearIndexCache');
        }
        count++;
        ctx.session.userName = 'minghua minghua';
        // console.log(ctx.session);
        ctx.state = {
            title: 'koa2 title 666555',
            name: ctx.session.userName,
            count: count
        };
        await ctx.render('index', {  });
    }
    
};

export default Index;