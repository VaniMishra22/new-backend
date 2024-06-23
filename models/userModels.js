const { Schema, model } = require('../connection');
const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    createdAt : { type: Date, dafault: Date.now }
});

module.exports = model('user', mySchema);