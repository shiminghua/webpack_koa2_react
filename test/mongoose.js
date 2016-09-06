let mongoose = require('mongoose');
// let config = require('../server/config/config');

mongoose.connect('mongodb://127.0.0.1/koa2_rect', {
    poolSize: 20
}, (err) => {
    console.log('err:' + err);
});

let db = mongoose.connection;

db.on('open', () => {
    console.log('mongodb is open');
});
db.once('open', () => {
    console.log('mongodb is open once');
});
db.on('error', (err) => {
    console.log(err);
});

let Schema = mongoose.Schema;

let TestSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 18 },
    time: { type: Date, default: Date.now },
    email: { type: String, required: true }
});
TestSchema.index({ name: 1 });

let TestModel = mongoose.model('TestModel', TestSchema);
// console.log(TestModel);

// TestModel.create({
//     name: 'minghua',
//     age: 20,
// }, (err, data) => {
//     console.log('data--->', data);
//     if (err) {
//         console.log(err.name);
//         console.log(err.message);
//         console.log(err.errors);
//     }
// });

TestModel.find({ name: 'minghua' }, 'name age', { limit: 5 }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
// console.log(new mongoose.Schema.Types.ObjectId());