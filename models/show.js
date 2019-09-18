const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    value : {type : Number, min : 1, max : 5, required : true},
    comment: {type : String, required : true}
}, {timestamps : true});
const Rating = mongoose.model('Rating', RatingSchema);


const ShowSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    image: { type: String, required: true, unique: true},
    rate: {type : [RatingSchema]},
}, {timestamps : true});
// create an object to that contains methods for mongoose to interface with MongoDB
const Show = mongoose.model('Show', ShowSchema);