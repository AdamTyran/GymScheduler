import mongoose from "mongoose";

interface ExerciseSet {
  id: number;
  date: string;
  exercises: Exercise[];
}

interface Exercise {
  id: number;
  name: string;
  sets?: number;
  reps?: number;
}

const productSchema = new mongoose.Schema<ExerciseSet>({
  date: { type: String, required: true },
  exercises: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
  },
});

export const exerciseModel = mongoose.model("Exercises", productSchema);
