const express = require("express");
const cors = require("cors");
const routes = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", routes);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(3001, () => {
  console.log("Server Started");
});
