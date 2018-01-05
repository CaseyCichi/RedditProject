var db = require("../models");

module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        db.User.findAll({
            include: [{
                model: db.Post,
                through: {
                    attributes: ['username']
                }
            }]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function (req, res) {
        db.Author.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    var db = require("../models");

    module.exports = function (app) {
        app.get("/api/users", function (req, res) {
            db.User.findAll({
                include: [{
                    model: db.Post,
                    through: {
                        attributes: ['username']
                    }
                }]
            }).then(function (dbUser) {
                res.json(dbUser);
            });
        });

        app.get("/api/users/:id", function (req, res) {
            db.Author.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Post]
            }).then(function (dbUser) {
                res.json(dbUser);
            });
        });

        app.post("/api/users", function (req, res) {
            db.Author.create(req.body).then(function (dbUser) {
                res.json(dbUser);
            });
        });

        app.delete("/api/users/:id", function (req, res) {
            db.Author.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbUser) {
                res.json(dbUser);
            });
        });

    };

    app.post("/api/users", function (req, res) {
        db.Author.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};