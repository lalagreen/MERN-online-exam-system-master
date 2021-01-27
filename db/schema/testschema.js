const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var testschema = new Schema({
    quesno: Number,
    question: String,
    options: [{ answer: String }, { answer: String }, { answer: String }, { answer: String }],
    selected: Number,
    correct: Number,
    correctflag:Boolean
});
var Tests = mongoose.model('Tests', testschema);

module.exports = Tests;