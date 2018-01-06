var db = require("../models");

module.exports = (app) => {
    app.get("/", (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.id = req.query.user_id;
        }
        db.Post.findAll({
            // where: query,
            // include: [db.User, db.Post]
        }).then((dbPost) => {
            //res.json(dbPost);
            var hbsObject = {
                cats: dbPost,
                headline: {
                  id: 0,
                  title: "Cute dogs",
                  Date: "1/3/2018",
                  score: 50,
                }
              };
          
            res.render('index', hbsObject);
        });
    });

    app.get("/api/posts/:id", (req, res) => {
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User, db.Content]
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });

    app.post("/api/posts", (req, res) => {
        db.Post.create(req.body).then((dbPost) => {
            res.json(dbPost);
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });

    app.delete("/api/posts/:id", (req, res) => {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });

    app.put("/api/posts", (req, res) => {
        db.Post.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then((dbPost) => {
            res.json(dbPost);
        });
    });
};