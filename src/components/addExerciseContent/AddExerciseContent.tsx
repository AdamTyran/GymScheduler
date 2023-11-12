import { ExerciseItem, ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import Button from "../button/Button";
import MapExercises from "../mapExercises/MapExercises";
import handleSubmit from "../../utils/handleSubmit";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
  clickedDate: string;
}

const AddExerciseContent = ({
  exerciseList,
  setExerciseList,
  clickedDate,
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
              exerciseItem: exerciseList,
            })
          }
        />
      </li>
    </div>
  );
};

export default AddExerciseContent;
