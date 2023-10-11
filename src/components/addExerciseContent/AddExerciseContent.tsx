import React from "react";
import { AddExerciseDayButton } from "../../pages/addExerciseDay/AddExerciseDayButtons";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";

interface Props {
  buttons: AddExerciseDayButton[];
  exercises: ExerciseList[];
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
}

const AddExerciseContent = ({
  buttons,
  exercises,
  newItem,
  setNewItem,
}: Props) => {
  return (
    <div>
      <li>
        <label>Date</label>
      </li>
      <li>
        <input type="text"></input>
      </li>
      <AddExerciseTextfield newItem={newItem} setNewItem={setNewItem} />
      <li>
        {exercises.map((item) => (
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
