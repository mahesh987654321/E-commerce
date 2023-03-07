import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import route from "./routes/authRoute.js";
const port = process.env.PORT || 5000;
import cors from "cors";
import categoryRouter from "./routes/catagoryRoutes.js";
// config dev
dotenv.config();

// Connect db
connectDB();

// rest object
const app = express();

// Middlewares
app.use(express.json());
app.use(cors("dev"));
app.use(cors());
// routes
app.use("/api/v1/auth", route);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.bgCyan.white);
});
