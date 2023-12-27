import { ExerciseSet } from "../utils/interfaces";
import api from "./instantiateAxios";

interface Props {
  day: ExerciseSet;
  setter(args?: ExerciseSet): void;
}

const handleDelete = async ({ day, setter }: Props) => {
  try {
    await api.delete(`/exerciseDay/${day._id}`);
    setter(undefined);
  } catch (err: any) {
    console.log(err.message);
  }
};

export default handleDelete;
