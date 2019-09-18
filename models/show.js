const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    image: { type: String, required: true, unique: true},
    rating: { type: Number, min : 1, max : 5 },
    comment : {type : [String]}
}, {timestamps : true});
// create an object to that contains methods for mongoose to interface with MongoDB
const Show = mongoose.model('Show', ShowSchema);