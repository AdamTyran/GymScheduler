import React from "react";
import { AddExerciseDayButton } from "./AddExerciseDayButtons";
import { ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

//adding until API doesn't exist

interface Props {
  buttons: AddExerciseDayButton[];
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseDay = ({ buttons, exerciseList, setExerciseList }: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ul>
        <AddExerciseContent
          buttons={buttons}
          exerciseList={exerciseList}
          setExerciseList={setExerciseList}
        />
        {exerciseList.map((item) => (
          <div key={item.id}>
            {item.name}
            {item.sets}
            {item.reps}
          </div>
        ))}
      </ul>
    </form>
  );
};

export default AddExerciseDay;
