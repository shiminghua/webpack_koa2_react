/**
 * SESSION配置文件，暂时无用
 */
import Redis from 'ioredis';
import { Store } from 'koa-session2';
import config from './config';

const SESSION = 'SESSION';

class RedisStore extends Store {

    constructor() {
        super();
        this.redis = new Redis(config.db.redis);
    }

    async get(sid) {
        return await this.redis.get(`${SESSION}:${sid}`);
    }

    async set(session, opts) {
        if (!opts.sid) {
            opts.sid = this.getID(24);
        }
        await this.redis.set(`${SESSION}:${opts.sid}`, session);
        return opts.sid;
    }

    async destroy(sid) {
        return await this.redis.del(`${SESSION}:${sid}`);
    }

}

export default RedisStore;