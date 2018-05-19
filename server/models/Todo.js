var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TodoSchema = new Schema({
    description: String,
    status: String    
});
//export our module to use in server.js
module.exports = mongoose.model('Todo', TodoSchema);