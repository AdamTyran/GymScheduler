import React, { useState } from "react";
import { AddExerciseDayButton } from "../../pages/addExerciseDay/AddExerciseDayButtons";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";
import Button from "../button/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
    <div className="flex flex-col gap-4">
      <li>
        <label>Date</label>
      </li>
      <li>
        <input type="text"></input>
      </li>
      <li className="flex justify-center">
        <Calendar className="rounded-xl" />
      </li>
      <ExerciseListAddDisplay
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
        sets={sets}
        reps={reps}
      />

      <li className="flex flex-col gap-2">
        {exerciseList.map((item) => (
          <React.Fragment key={item.id}>
            {item.name}
            <div className="flex flex-row justify-center gap-4 mb-4">
              <InputNumberTextfield
                name="sets"
                value={sets}
                onChange={useSets}
              />
              <InputNumberTextfield
                name="reps"
                value={reps}
                onChange={useReps}
              />
            </div>
          </React.Fragment>
        ))}
      </li>
      <li>
        <Button text="Submit" func={handleSubmit} />
      </li>
    </div>
  );
};

export default AddExerciseContent;
