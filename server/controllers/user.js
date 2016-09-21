/**
 * 用户 - 登录、注册
 */
import Controller from '../lib/controller';
import UserModel from '../models/user';
import TopicModel from '../models/topic';

let $User = new UserModel();
let topicModel = new TopicModel(); 

class Signup extends Controller {

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
            ctx.body = super.formatError(1002, '用户名或密码错误');
            // {
            //     code: 1002,
            //     msg: '用户名或密码错误'
            // }
            return;
        }
        ctx.session.user = userInfo;
        // ctx.body = {
        //     error: 200,
        //     msg: '登录成功'
        // };
        ctx.redirect('/');
    }

    /**
     * 用户主页
     */
    async userIndex(ctx) {
        // 获取未回复的话题
        let noReplyTopics = await topicModel.getNoReplyTopics();

        let name = ctx.params.name;
        let topics = await topicModel.getTopicsByName(name);

        let tab = ctx.query.tab;

        await ctx.render('user', {
            noReplyTopics,
            topics,
            tab: tab
        });
    }

}

export default Signup;