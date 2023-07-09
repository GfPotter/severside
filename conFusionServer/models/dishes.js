const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose); // this will load the new currency type into mongoose
const Currency = mongoose.Types.Currency; // this will get the currency type from mongoose



const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // this field must be unique
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
    description: {
        type: String,
        required: true
    }

}, { timestamps: true } // this will automatically add the two fields createdAt and updatedAt
);

var dishes = mongoose.model('Dish', dishSchema);
module.exports = dishes;
