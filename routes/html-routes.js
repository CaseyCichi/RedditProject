// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  router.get('/', function(req, res) {
    res.render('index');
  });
  
//   router.get('/profile', function(req, res) {
//     res.render('profile');
//   });
  
//   router.get('/main-post', function(req, res) {
//     res.render('main-post');
//   });

//   // authors route loads author-manager.html
//   app.get("/users", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

};
