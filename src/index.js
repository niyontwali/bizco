import express from "express";
import dotenv from "dotenv";
import { books } from "./constants/dummy";

// configure dotenv library
dotenv.config();

// initialize app with express
const app = express();

// methods
app.get("/", (req, res) => {
  res.send("Home Page");
});

// get all books
app.get("/api/books", (req, res) => {
  const filteredBooks = books.map(book => {
    const { id, title, author } = book;
    return { id, title, author };
  });
  res.status(200).json({
    message: "success",
    data: filteredBooks
  });
});

// get one book
app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find(book => book.id === Number(id));
  if (book) {
    res.status(200).json({
      message: "success",
      data: book
    });
  } else {
    res.status(404).json({
      message: `The book with ${id} does not exist`,
    });
  }
});

app.all("*", (req, res) => {
  res.send("route not found");
});

// PORT
const { PORT } = process.env;

// Server listening
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
