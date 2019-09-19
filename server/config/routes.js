const mongoose = require('mongoose')
    Dog = mongoose.model('Show')

const shows = require('../../controllers/shows')

module.exports = function(app) {

// // Get all shows
app.get('/shows', shows.findAll)

// Create a show
app.post('/shows', shows.create);

// Find a show by id
app.get('/shows/:id', shows.findOne);

// Update a show
app.put('/shows/:id/', shows.edit);

// Delete a show
app.delete('/shows/:id', shows.delete);


////////////

app.post('/shows/:id/rates', shows.rateCreate);


}
