var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data,
      headline: {
        id: 0,
        title: "Cute dogs",
        Date: "1/3/2018",
        score: 50,
      }
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get('/post', function(req, res) {
  res.render('new-post');
});

router.get('/profile', function(req, res) {
  res.render('profile');
});

router.get('/main-post/:id', function(req, res) {
  res.render('main-post');
});
module.exports = router;
