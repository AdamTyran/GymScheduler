import express from "express";
import mongoose from "mongoose";
const app = express();
const MONGO_URI =
  "mongodb+srv://root:MU3mJtH3QSQlTZ28@gymscheduler.c8rayg3.mongodb.net/";

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("connected to database and server");
    });
  })
  .catch(() => console.log("error"));
