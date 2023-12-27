import { Schema, model, Types } from "mongoose";

interface Exercise {
  _id: Types.ObjectId;
  name: string;
  sets?: number;
  reps?: number;
}

interface ExerciseSet {
  _id: Types.ObjectId;
  date: Date;
  exercises: Types.Array<Exercise>;
}

const setSchema = new Schema<Exercise>({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
});

const exerciseSchema = new Schema<ExerciseSet>({
  date: { type: Date, required: true },
  exercises: { type: [setSchema], required: true },
});

export const exerciseModel = model("Exercises", exerciseSchema);
