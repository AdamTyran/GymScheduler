import { ExerciseItem, ExerciseList } from "../../pages/mainPage/MainPage";
import InputAdd from "../inputAdd/InputAdd";
import Button from "../button/Button";
import MapExercises from "../mapExercises/MapExercises";
import handleSubmit from "../../utils/handleSubmit";

interface Props {
  setter(list: ExerciseItem): void;
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
  clickedDate: string;
}

const AddExerciseContent = ({
  setter,
  exerciseList,
  setExerciseList,
  clickedDate,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <InputAdd exerciseList={exerciseList} setExerciseList={setExerciseList} />

      <div className="flex flex-col gap-2">
        <MapExercises list={exerciseList} onListChange={setExerciseList} />
      </div>
      <div>
        <Button
          text="Submit"
          onClick={() => {
            handleSubmit({
              date: clickedDate,
              exerciseItem: exerciseList,
              setter: setter,
            });
            setExerciseList([]);
          }}
        />
      </div>
    </div>
  );
};

export default AddExerciseContent;
