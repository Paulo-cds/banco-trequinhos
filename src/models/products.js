const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    urlImage: String,
})

const Model = mongoose.model('products', schema)

module.exports = Model