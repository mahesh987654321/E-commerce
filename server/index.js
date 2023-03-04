import express from "express";
import colors from "colors";
import morgan from "morgan";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
// config dev
dotenv.config();

// Connect db
connectDB();

// rest object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.bgCyan.white);
});
