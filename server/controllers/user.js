import Models from '../lib/core';
let $User = new Models.$User();

class Signup {

    /**
     * 获取注册页面
     */
    async getSignupPage(ctx) {
        await ctx.render('author/signup');
    }
    /**
     * 用户注册
     */
    async postSignup(ctx) {
        let data = ctx.request.body;
        let userExist = await $User.getUserByName(data.name);
        if (userExist) {
            ctx.body = {
                error: 1001,
                msg: '用户名已存在'
            };
            return;
        }
        
        await $User.addUser(data);
        ctx.session.user = {
            name: data.name,
            email: data.email
        };
        ctx.body = {
            error: 200,
            msg: '注册成功'
        };
    }

    /**
     * 登出
     */
    async logout (ctx) {
        ctx.session.user = null;
        ctx.redirect('back');
    }

    /**
     * 登录
     */
    async getSignin (ctx) {
        await ctx.render('author/signin');
    }

    /**
     * 登录 
     */
    async postSignin(ctx) {
        let data = ctx.request.body;
        let userInfo = await $User.getUserByName(data.name);
        if (!userInfo || (userInfo.password !== data.password)) {
            ctx.body = {
                error: 1002,
                msg: '用户名或密码错误'
            };
            return;
        }
        ctx.session.user = {
            name: userInfo.name,
            email: userInfo.email
        };
        ctx.body = {
            error: 200,
            msg: '登录成功'
        };
    }

}

export default Signup;