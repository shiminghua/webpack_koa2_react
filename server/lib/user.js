import { User } from '../models/index';

class UserController {
    constructor() {

    }

    /*****
     * 新建一个用户
     */
    addUser(data) {
        return User.create(data);
    }

    /***
     * 通过ID获取用户
     */
    getUserById(id) {
        return User.findById(id).exec();
    }

    /***
     * 通过name获取用户
     */
    getUserByName(name) {
        return User.findOne({name: name}).exec();
    }

}

export default UserController;