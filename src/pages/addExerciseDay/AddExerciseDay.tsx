import React from "react";
import { AddExerciseDayButton } from "./AddExerciseDayButtons";

interface Props {
  buttons: AddExerciseDayButton[];
}

const AddExerciseDay = ({ buttons }: Props) => {
  return (
    <div>
      Add exercise
      <form onSubmit={(e) => e.preventDefault()}>
        {buttons.map((item) => (
          <div key={item.id}>
            <label>{item.name}</label>
            <input type="text" />
          </div>
        ))}
      </form>
    </div>
  );
};

export default AddExerciseDay;
