import React from "react";
import { AddExerciseDayButton } from "../../pages/addExerciseDay/AddExerciseDayButtons";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";

interface Props {
  buttons: AddExerciseDayButton[];
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseContent = ({
  buttons,
  exerciseList,
  setExerciseList,
}: Props) => {
  return (
    <div>
      <li>
        <label>Date</label>
      </li>
      <li>
        <input type="text"></input>
      </li>
      <ExerciseListAddDisplay
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
      />
      <li>
        {exerciseList.map((item) => (
          <div key={item.id}>
            {item.name + " " + item.sets + " x " + item.reps}
          </div>
        ))}
      </li>
      <li>
        <button className="bg-white">Submit</button>
      </li>
    </div>
  );
};

export default AddExerciseContent;
