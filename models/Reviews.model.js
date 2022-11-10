const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  author: {
    ref: "authors",
    type: mongoose.SchemaTypes.ObjectId,
  },
  book: {
    ref: "books",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Reviews = mongoose.model("reviews", reviewSchema);

module.exports = Reviews;
