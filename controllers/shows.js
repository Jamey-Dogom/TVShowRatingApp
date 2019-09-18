const mongoose = require('mongoose')
const Show = mongoose.model('Show')

module.exports = {
    create: function (req, res) {
        Task.create(req.body)
            .then(task => {
                res.json(task)
            })
            .catch(err => res.json(err));
    },

    findAll: function (req, res) {
        Show.find()
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },

    findOne: function (req, res) {
        Show.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },

    edit: function (req, res) {
        Show.updateOne({
            _id: req.params.id
        }, {$set: {title: req.body.title, description: req.body.description, completed : req.body.completed}}
        )
        .then(() => {
            res.redirect('/tasks')
        })
        .catch(err => res.json(err));
    },

    delete: function (req, res) {
        Show.deleteOne({
            _id: req.params.id
        })
        .then(() => {
            res.redirect('/tasks')
        })
        .catch(err => res.json(err));
    }

}