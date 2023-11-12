import { ExerciseItem, ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import Button from "../button/Button";
import "react-calendar/dist/Calendar.css";
import MapExercises from "../mapExercises/MapExercises";
import handleSubmit from "../../utils/handleSubmit";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
  clickedDate: string;
  clickedDay: ExerciseItem | undefined;
  newExerciseDay: ExerciseList[];
  setNewExerciseDay(list: ExerciseList[]): void;
}

const AddExerciseContent = ({
  exerciseList,
  setExerciseList,
  clickedDate,
  clickedDay,
  newExerciseDay,
  setNewExerciseDay,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <ExerciseListAddDisplay
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
      />

      <li className="flex flex-col gap-2">
        <MapExercises list={exerciseList} onListChange={setExerciseList} />
      </li>
      <li>
        <Button
          text="Submit"
          onClick={() =>
            handleSubmit({
              date: clickedDate,
              exerciseItem: newExerciseDay,
            })
          }
        />
      </li>
    </div>
  );
};

export default AddExerciseContent;
