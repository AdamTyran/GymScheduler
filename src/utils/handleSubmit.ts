import useAxiosFetch from "../hooks/useAxiosFetch";
import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  date: string;
  exerciseItem: ExerciseList[] | undefined;
  setter(list: ExerciseItem): void;
}

const handleSubmit = async ({ date, exerciseItem, setter }: Props) => {
  try {
    if (exerciseItem) {
      const newExerciseDay: ExerciseItem = {
        id: Math.random(),
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
