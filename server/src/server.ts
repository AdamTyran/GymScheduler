import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { exerciseModel } from "./models/productModel";

dotenv.config();
const app = express();
const MONGO_URI = `mongodb+srv://root:${process.env.DBPASS}@gymscheduler.c8rayg3.mongodb.net/`;

app.use(express.json());

app.post("/exerciseDay", async (req, res) => {
  try {
    const exercise = await exerciseModel.create(req.body);
    res.status(200).json(exercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.get("/exerciseDay", async (req, res) => {
  try {
    const exercises = await exerciseModel.find({});
    res.status(200).json(exercises);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.put("/exerciseDay/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await exerciseModel.findByIdAndUpdate(id, req.body);
    if (!exercise) {
      return res
        .status(404)
        .json({ message: `cannot find exercise day with id ${id}` });
    }
    const updatedExercise = await exerciseModel.findById(id);
    res.status(200).json(updatedExercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.delete("/exerciseDay/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await exerciseModel.findByIdAndDelete(id);
    if (!exercise) {
      return res
        .status(404)
        .json({ message: `cannot find exercise day with id ${id}` });
    }
    res.status(200).json(exercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(3500, () => {
      console.log("connected to database and server");
    });
  })
  .catch(() => console.log("error"));
