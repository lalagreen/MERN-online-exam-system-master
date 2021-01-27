const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var userschema = new Schema({
    email: String,
    password: String
});
var Users = mongoose.model('Users',userschema);

module.exports= Users;