/**
 * 首页 
 */

class Index {

    constructor(props) {

    }

    async index(ctx) {
        await ctx.render('index', {  });
    }
    
};

export default Index;