var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RGBValues = new Schema({
    rgb: [  {
            name: String,
            red: [{red: Number,hovered: Boolean}],
            green: [{green: Number,hovered: Boolean}],
            blue: [{blue: Number,hovered: Boolean}],
            
            }
        
    ]
});



module.exports = mongoose.model('rgb_values', RGBValues);