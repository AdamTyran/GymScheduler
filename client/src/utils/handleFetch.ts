import { ExerciseSet, Exercise } from "../utils/interfaces";
import api from "./instantiateAxios";

interface Props {
  date: string;
}

const handleFetch = async ({ date }: Props) => {
  try {
    await api.get("/exerciseDay");
  } catch (err: any) {
    console.log(err.message);
  }
};

export default handleFetch;
