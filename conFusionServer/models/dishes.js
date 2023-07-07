const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose); // this will load the new currency type into mongoose
const Currency = mongoose.Types.Currency; // this will get the currency type from mongoose
var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true

    },
    comment: {
        type: String,
        required: true

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
}, {
    timestamps: true

});



const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // this field must be unique
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },

    comments: [commentSchema] // this is a sub-document

}, { timestamps: true } // this will automatically add the two fields createdAt and updatedAt
);

var dishes = mongoose.model('Dish', dishSchema);
module.exports = dishes;
