const app = express();
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 6969;
const savedBooks = require("./models/SavedBooks");
const Book = require("./models/SavedBooks");

mongoose.connect('mongodb://127.0.0.1:27017/savedBooks', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established successfully")
})

app.get("/", (req, res) => {
    savedBooks.find((err, books) => {
        if (err) {
            console.log(err);
        } else {
            res.json(books);
        }
    })
})

app.post("/save", (req, res) => {
    const book = new Book(req.body);
    book
    .save()
    .then((book) => {
        res.json(book);
    })
    .chatc((err) => {
        res.status(500).send(err.message);
    });
})

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})