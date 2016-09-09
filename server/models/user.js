import mongoose from '../lib/ModelMongodb';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    signature: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

UserSchema.index({ name: 1 });

let User = mongoose.model('User', UserSchema);

class UserModel extends User {
    constructor() {
        super();
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
    async getUserByName(name) {

        // let query = User.findOne({name: name});
        // let promise = query.exec();
        // return promise;
        return User.findOne({ name: name }).exec();

    }

}

export default UserModel;