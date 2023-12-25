import { ExerciseSet } from "../utils/interfaces";
import api from "./instantiateAxios";

interface Props {
  day: ExerciseSet;
  setter(args?: ExerciseSet): void;
}

const handleDelete = async ({ day, setter }: Props) => {
  try {
    await api.delete(`/exerciseDay/${day.id}`);
    setter(undefined);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default handleDelete;
