const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cakeSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  id: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Cake', cakeSchema)