import { ExerciseSet, Exercise } from "../utils/interfaces";
import api from "./instantiateAxios";

interface Props {
  date: Date;
  exerciseItem: Exercise[] | undefined;
  setter(args: ExerciseSet): void;
}

const handleSubmit = async ({ date, exerciseItem, setter }: Props) => {
  try {
    if (exerciseItem) {
      const newExerciseDay: ExerciseSet = {
        date: date,
        exercises: exerciseItem,
      };
      await api.post("/exerciseDay", newExerciseDay);
      setter(newExerciseDay);
    } else {
      alert("Exercises list cannot be empty");
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
