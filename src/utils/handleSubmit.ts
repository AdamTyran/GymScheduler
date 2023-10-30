import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  date: string;
  exerciseItem: ExerciseList[];
}

const handleSubmit = async ({ date, exerciseItem }: Props) => {
  // const id = exerciseItem.length
  //   ? exerciseItem[exerciseItem.length - 1].id + 1
  //   : 1;
  // const newExercise = { id, name: name, sets: sets, reps: reps };

  const newExerciseDay: ExerciseItem = { date, exercises: exerciseItem };

  try {
    await api.post("/exercises", newExerciseDay);
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
