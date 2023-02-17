import express from "express";
import dotenv from "dotenv";
import { books } from "./constants/dummy";
import routes from "./routes"

// configure dotenv library
dotenv.config();

// initialize app with express
const app = express();

// routes
app.use('/api/v1', routes);

app.all("*", (req, res) => {
  res.send("route not found");
});

// PORT
const { PORT } = process.env;

// Server listening
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
