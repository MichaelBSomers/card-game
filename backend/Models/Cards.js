const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cardsSchema = new Schema({
  name: {
    type: String
  }
}, {
    collection: 'cards'
  })

module.exports = mongoose.model('Student', cardsSchema)