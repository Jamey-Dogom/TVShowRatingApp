const mongoose = require('mongoose')
const Show = mongoose.model('Show')
const Rating = mongoose.model('Rating')

module.exports = {
    create: function (req, res) {
        Show.create(req.body)
            .then(show => {
                res.json(show)
            })
            .catch(err => res.json(err));
    },

    findAll: function (req, res) {
        Show.find()
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    findOne: function (req, res) {
        Show.findById(req.params.id)
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    edit: function (req, res) {
        Show.updateOne({
                _id: req.params.id
            }, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed
                }
            })
            .then(() => {
                res.redirect('/shows')
            })
            .catch(err => res.json(err));
    },

    delete: function (req, res) {
        Show.deleteOne({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('/shows')
            })
            .catch(err => res.json(err));
    },

    rateCreate: function (req, res) {
        Show.findByIdAndUpdate(
            req.params.id, {
                $push: {
                    rate: new Rating(req.body)
                }
            },
            {
            runValidators : true,
            new : true
            }
        )
        .catch(console.log)
        .finally(() => res.redirect('/shows'))
},

}