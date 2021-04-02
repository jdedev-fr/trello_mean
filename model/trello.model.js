const mongo = require('../myMong')

const { Schema } = mongo;

const trellSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    pass: String,
    mail: String,
    key: String,
    tasks: [{ title: String, content: String, state: Number }],

});

const Trell = mongo.model('User', trellSchema);

module.exports = Trell;