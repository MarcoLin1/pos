const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
})

module.exports = mongoose.model('Cake', productSchema)