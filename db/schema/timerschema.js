const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var timerschema = new Schema({
    timer: Number
});
var Timer = mongoose.model('Timer', timerschema);

module.exports = Timer;