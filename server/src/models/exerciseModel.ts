import { Schema, model, Types } from "mongoose";
import { array, date, number, object, string } from "yup";

interface Exercise {
  _id: Types.ObjectId;
  name: string;
  sets: number;
  reps: number;
}

interface ExerciseSet {
  _id: Types.ObjectId;
  date: Date;
  exercises: Types.Array<Exercise>;
}

const ExerciseSchema = new Schema<Exercise>({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
});

const DaySchema = new Schema<ExerciseSet>({
  date: { type: Date, required: true },
  exercises: { type: [ExerciseSchema], required: true },
});

export const validateExerciseSchema = object<ExerciseSet>({
  date: date().required(),
  exercises: array().of(
    object<ExerciseSet>({
      name: string().required(),
      sets: number().required().min(0).integer(),
      reps: number().required().min(0).integer(),
    })
  ),
});

export const exerciseModel = model("Exercises", DaySchema);
