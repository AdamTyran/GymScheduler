import { ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  data: ExerciseList[];
  name: string;
  sets: number;
  reps: number;
}

const handleSubmit = async ({ data, name, sets, reps }: Props) => {
  const id = data.length ? data[data.length - 1].id + 1 : 1;
  const newExercise = { id, name: name, sets: sets, reps: reps };
  console.log(newExercise);
  try {
    await api.post("/exercises", newExercise);
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
