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
    _id: selectedDay._id,
    date: selectedDay.date,
    exercises: updatedExerciseList,
  };
  try {
    await api.put(`/exerciseDay/${selectedDay._id}`, updatedDay);
    setter(updatedDay);
  } catch (err: any) {
    console.error(err.message);
  }
};

export default handleChange;
