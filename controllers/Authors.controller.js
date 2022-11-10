const Authors = require('../models/Authors.model')

module.exports.authorsController = {
    addAuthor: (req, res) => {
        Authors.create({
            name: req.body.name,
            bio: req.body.bio
        }).then(() => {
            res.json("Автор добавлен");
        })
    },
}