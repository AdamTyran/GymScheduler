import React from "react";
import { AddExerciseDayButton } from "../../pages/addExerciseDay/AddExerciseDayButtons";
import { ExerciseList } from "../../pages/mainPage/MainPage";

interface Props {
  buttons: AddExerciseDayButton[];
  exercises: ExerciseList[];
}

const AddExerciseContent = ({ buttons, exercises }: Props) => {
  return (
    <div>
      <label>Date</label>
      <div>
        <input type="text"></input>
      </div>
      <label>Add Exercise</label>
      <div>
        <input type="text"></input>
      </div>
      <div>
        {exercises.map((item) => (
          <div key={item.id}>
            {item.name + " " + item.sets + " x " + item.reps}
          </div>
        ))}
      </div>
      <div>
        <button className="bg-white">Submit</button>
      </div>
    </div>
  );
};

export default AddExerciseContent;
