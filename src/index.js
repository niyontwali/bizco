import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from "cors";
import db from "../database/config";
import routes from "./routes";

// configure dotenv library
dotenv.config();

// initialize app with express
const app = express();

app.use(cors());
app.enable('trust proxy');
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api/v1', routes);

app.all("*", (req, res) => {
  res.send("route not found");
});

// PORT
const { PORT } = process.env;


Promise.all([
  db.raw('SELECT VERSION()'),
  app.listen(PORT),
]).then(([dbResult]) => {
  console.log(`DB successfully connected: ${dbResult[0][0]["VERSION()"]}`);
  console.log(`Server listening on ${PORT}`);
}).catch(error => {
  console.error(error);
  process.exit(1);
});
