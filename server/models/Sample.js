var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SampleSchema = new Schema({
    name: String
});
//export our module to use in server.js
module.exports = mongoose.model('Sample', SampleSchema);