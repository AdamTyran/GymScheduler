import { ExerciseSet, Exercise } from "../utils/interfaces";
import api from "./instantiateAxios";

interface Props {
  selectedDay: ExerciseSet;
  updatedExerciseList: Exercise[];
  setter(args: ExerciseSet | undefined): void;
}

const handleChange = async ({
  selectedDay,
  updatedExerciseList,
  setter,
}: Props) => {
  const updatedDay: ExerciseSet = {
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
