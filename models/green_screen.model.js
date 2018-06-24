var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GreenScreen = new Schema({
    redStart: [{
        red: Number,
        hovered: Boolean
    }]
});



module.exports = mongoose.model('green_screens', GreenScreen);