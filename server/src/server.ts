const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongodbUri =
  "mongodb+srv://root:MU3mJtH3QSQlTZ28@gymscheduler.c8rayg3.mongodb.net/";

mongoose
  .connect(mongodbUri)
  .then(() => {
    app.listen(3000, () => {
      console.log("connected to database and server");
    });
  })
  .catch(() => console.log("error"));
