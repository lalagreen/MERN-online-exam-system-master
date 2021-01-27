const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var adminschema = new Schema({
    email: String,
    password: String
});
var Admin = mongoose.model('Admin',adminschema);

module.exports= Admin;