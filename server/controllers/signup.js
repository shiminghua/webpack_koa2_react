import Models from '../lib/core';
let $User = new Models.$User();

class Signup {

    async getSignupPage(ctx) {
        
        ctx.state = {
            title: 'signup test'
        };
        await ctx.render('author/signup');
    }

}

export default Signup;