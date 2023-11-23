import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  selectedDay: ExerciseItem;
  updatedExerciseList: ExerciseList[];
  setter(list: ExerciseItem | undefined): void;
}

const handleChange = async ({
  selectedDay,
  updatedExerciseList,
  setter,
}: Props) => {
  const updatedDay: ExerciseItem = {
    id: selectedDay.id,
    date: selectedDay.date,
    exercises: updatedExerciseList,
  };
  try {
    await api.put(`/exerciseDay/${selectedDay.id}`, updatedDay);
    setter(updatedDay);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default handleChange;
