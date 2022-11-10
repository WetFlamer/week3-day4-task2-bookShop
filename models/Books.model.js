const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: String,
  author: {
    ref: 'authors',
    type: mongoose.SchemaTypes.ObjectId
},
  genre: {
    ref: 'genres',
    type: mongoose.SchemaTypes.ObjectId
  }

});

const Books = mongoose.model('books', bookSchema);

module.exports = Books;
