import { ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  state: ExerciseList[];
  setState(list: ExerciseList[]): void;
  id: number;
}

const handleDelete = async ({ state, setState, id }: Props) => {
  try {
    await api.delete(`/exercises/${id}`);
    setState(state.filter((item) => item.id !== id));
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default handleDelete;
