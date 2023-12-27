import { ExerciseSet, Exercise } from "../../utils/interfaces";
import InputAdd from "../inputAdd/InputAdd";
import Button from "../button/Button";
import MapList from "../mapList/MapList";
import handleSubmit from "../../utils/handleSubmit";

interface Props {
  setter(args: ExerciseSet): void;
  exerciseList: Exercise[];
  setExerciseList(args: Exercise[]): void;
  clickedDate: Date;
}

const FormAdd = ({
  setter,
  exerciseList,
  setExerciseList,
  clickedDate,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <InputAdd exerciseList={exerciseList} setExerciseList={setExerciseList} />

      <div className="flex flex-col gap-2">
        <MapList list={exerciseList} onListChange={setExerciseList} />
      </div>
      <div>
        <Button
          className="bg-blue-700 hover:bg-blue-800"
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

export default FormAdd;
