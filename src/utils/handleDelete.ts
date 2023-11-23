import { ExerciseItem, ExerciseList } from "../pages/mainPage/MainPage";
import api from "./instantiateAxios";

interface Props {
  day: ExerciseItem;
  setter(list: ExerciseItem | undefined): void;
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
