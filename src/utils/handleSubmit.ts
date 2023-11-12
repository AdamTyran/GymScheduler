import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  date: string;
  exerciseItem: ExerciseList[] | undefined;
}

const handleSubmit = async ({ date, exerciseItem }: Props) => {
  // if (exerciseItem !== undefined) {
  //   const newExerciseDay: ExerciseItem = { date, exercises: exerciseItem };
  // } else {
  //   alert("chuj");
  // }

  try {
    if (exerciseItem) {
      const newExerciseDay: ExerciseItem = { date, exercises: exerciseItem };
      await api.post("/exercises", newExerciseDay);
      console.log("added");
    } else {
      alert("Execises list cannot be empty");
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
