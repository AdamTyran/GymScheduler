import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { exerciseModel, validateExerciseSchema } from "./models/exerciseModel";

dotenv.config();
const app = express();
const MONGO_URI = `${process.env.DB_CONNECTION}`;
const PORT = 3500;

app.use(
  express.json(),
  cors({
    origin: process.env.FRONTEND_ADDRESS,
  })
);

app.post("/exerciseDay", async (req, res) => {
  try {
    try {
      await validateExerciseSchema.validate(req.body);
    } catch (error) {
      res.status(400).json({ message: error });
    }
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
    try {
      await validateExerciseSchema.validate(req.body);
    } catch (error) {
      res.status(400).json({ message: error });
    }
    const { id } = req.params;
    const exercise = await exerciseModel.findByIdAndUpdate(id, req.body);
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

app.delete("/exerciseDay/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await exerciseModel.findByIdAndDelete(id);
    if (!exercise) {
      return res
        .status(404)
        .json({ message: `cannot find exercise day with id ${id}` });
    }
    res.status(204).json(exercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Successfully connected to database. Server is listening on port ${PORT} `
      );
    });
  })
  .catch((err: any) => {
    console.error(`Error connecting to the MongoDB database ${MONGO_URI}}`);
    console.log(err.message);
  });
