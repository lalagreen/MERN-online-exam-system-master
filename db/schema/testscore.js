const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var scoreschema = new Schema({
    email: String,
    name: String,
    score:Number,
    rank:Number
});
var Scores = mongoose.model('Scores',scoreschema);

module.exports= Scores;