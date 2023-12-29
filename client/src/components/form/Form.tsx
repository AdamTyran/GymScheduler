import { ExerciseSet, Exercise } from "../../utils/interfaces";
import FormAdd from "../FormAdd/FormAdd";

interface Props {
  setter(args: ExerciseSet): void;
  clickedDate: Date;
  newExerciseDaySet: Exercise[];
  setNewExerciseDaySet(args: Exercise[]): void;
}

const Form = ({
  setter,
  clickedDate,
  newExerciseDaySet,
  setNewExerciseDaySet,
}: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full px-2 mx-auto">
      <div className="flex flex-col gap-4">
        <FormAdd
          setter={setter}
          exerciseList={newExerciseDaySet}
          setExerciseList={setNewExerciseDaySet}
          clickedDate={clickedDate}
        />
      </div>
    </form>
  );
};

export default Form;
