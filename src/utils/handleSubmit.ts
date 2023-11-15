import useAxiosFetch from "../hooks/useAxiosFetch";
import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  date: string;
  exerciseItem: ExerciseList[] | undefined;
}

const handleSubmit = async ({ date, exerciseItem }: Props) => {
  try {
    if (exerciseItem) {
      const newExerciseDay: ExerciseItem = {
        id: Math.random(),
        date: date,
        exercises: exerciseItem,
      };
      console.log(newExerciseDay);
      await api.post("/exerciseDay", newExerciseDay);
      console.log("added");
    } else {
      alert("Exercises list cannot be empty");
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
