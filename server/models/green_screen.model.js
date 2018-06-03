var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GreenScreen = new Schema({
    redStart: [Number]
});



module.exports = mongoose.model('green_screens', GreenScreen);