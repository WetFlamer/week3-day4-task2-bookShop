const mongoose = require("mongoose");

const authorScheme = mongoose.Schema({
  name: String,
  bio: String,
});
const Authors = mongoose.model("authors", authorScheme);

module.exports = Authors;
