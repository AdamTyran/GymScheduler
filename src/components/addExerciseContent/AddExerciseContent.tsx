import React, { useState } from "react";
import { AddExerciseDayButton } from "../../pages/addExerciseDay/AddExerciseDayButtons";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";
import Button from "../button/Button";

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
  const [sets, useSets] = useState(0);
  const [reps, useReps] = useState(0);
  //TODO Add useEffect to change exerciseList when sets and reps change

  const handleSubmit = () => {
    console.log("added");
  };

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
        sets={sets}
        reps={reps}
      />

      <li>
        {exerciseList.map((item) => (
          <div key={item.id}>
            {item.name}
            <InputNumberTextfield name="sets" value={sets} onChange={useSets} />
            <InputNumberTextfield name="reps" value={reps} onChange={useReps} />
          </div>
        ))}
      </li>
      <li>
        {/* <button className="bg-white" onClick={handleSubmit}>
          Submit
        </button> */}
        <Button text="Submit" func={handleSubmit} />
      </li>
    </div>
  );
};

export default AddExerciseContent;
