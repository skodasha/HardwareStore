const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tool = new Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type:  String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    subsection: {
        type: String,
        required: true,
    },
    _deletedAt: { 
        type: Date,
        default: null
    },
})

module.exports = mongoose.model('tools', Tool)