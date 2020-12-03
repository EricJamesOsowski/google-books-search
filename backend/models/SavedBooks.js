const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoogleBooksSchema = new Schema({
  _id: Number,
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", GoogleBooksSchema);
 
module.exports = Book;
