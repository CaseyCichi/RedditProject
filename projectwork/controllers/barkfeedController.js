var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var bark = require("../models/barkfeed.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bark.all(function(data) {
    
  });
});

router.post("/", function(req, res) {
  bark.create(
  );
});

router.put("/", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bark.update({
    
  });
});

router.delete("/", function(req, res) {
  var condition = "id = " + req.params.id;

  bark.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
