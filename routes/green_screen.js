var express = require('express');
var router = express.Router();
var GreenScreen = require('../models/green_screen.model.js');
var mongoose = require('mongoose');

router.post('/', function (req, res) {

  GreenScreen.create(
    {
      redStart: req.body.redStart

    },

    function (err, user) {
      if (err) return console.error(err);
      console.log(user, '******');
      res.json(user);
    });
});

router.get('/', function (req, res) {
  GreenScreen.find({}, function (err, docs) {
    res.json(docs)
  })
});

router.put('/', function (req, res) {
  GreenScreen.findOneAndUpdate({ _id: req.body.id }, req.body.redStart, { new: true }, function (err, docs) {
    console.log(docs);
    console.log('updated user')
    res.json(docs)
  })
});

router.delete('/', function (req, res) {
  GreenScreen.remove({ _id: req.body.id }, function (err, docs) {
    res.json(docs)
  });
})



module.exports = router;
