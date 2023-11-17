import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  selectedDay: ExerciseItem;
  updatedExerciseList: ExerciseList[];
}

const handleChange = async ({ selectedDay, updatedExerciseList }: Props) => {
  const updatedDay: ExerciseItem = {
    id: selectedDay.id,
    date: selectedDay.date,
    exercises: updatedExerciseList,
  };
  try {
    const response = await api.put(
      `/exerciseDay/${selectedDay.id}`,
      updatedDay
    );
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default handleChange;
