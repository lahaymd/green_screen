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

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});



module.exports = router;
