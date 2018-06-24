var express = require('express');
var router = express.Router();
var RGBValues = require('../models/rgb_values.model.js');
var mongoose = require('mongoose');

router.post('/', function (req, res) {

    RGBValues.create(
        {
            rgb: req.body.rgb

        },

        function (err, user) {
            if (err) return console.error(err);
            console.log(user, '******');
            res.json(user);
        });
});

router.get('/', function (req, res) {
    RGBValues.find({}, function (err, docs) {
        res.json(docs)
    })
});

router.post('/name', function (req, res) {
    console.log('rgb name ' +req);
    
    RGBValues.find({'rgb.name': req.body.name}, function (err, docs) {
        if(err) {console.log('error ' + err);
        }
        console.log('docs' + docs);
        
        res.json(docs)
    })
});

router.put('/', function (req, res) {
    RGBValues.findOneAndUpdate({ _id: req.body.id }, req.body.redStart, { new: true }, function (err, docs) {
        console.log(docs);
        console.log('updated user')
        res.json(docs)
    })
});

router.delete('/', function (req, res) {
    RGBValues.remove({ _id: req.body.id }, function (err, docs) {
        res.json(docs)
    });
})



module.exports = router;
