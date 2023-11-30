import { ExerciseItem, ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseContent from "../addExerciseContent/AddExerciseContent";

interface Props {
  setter(list: ExerciseItem): void;
  clickedDate: string;
  newExerciseDay: ExerciseList[];
  setNewExerciseDay(list: ExerciseList[]): void;
}

const AddExerciseDay = ({
  setter,
  clickedDate,
  newExerciseDay,
  setNewExerciseDay,
}: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full px-2 mx-auto">
      <div className="flex flex-col gap-4">
        <AddExerciseContent
          setter={setter}
          exerciseList={newExerciseDay}
          setExerciseList={setNewExerciseDay}
          clickedDate={clickedDate}
        />
      </div>
    </form>
  );
};

export default AddExerciseDay;
