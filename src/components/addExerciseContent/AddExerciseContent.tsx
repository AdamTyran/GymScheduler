import React, { useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";
import Button from "../button/Button";
import "react-calendar/dist/Calendar.css";
import MapExercises from "../mapExercises/MapExercises";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseContent = ({ exerciseList, setExerciseList }: Props) => {
  const [date, setDate] = useState<string>("");

  const handleSubmit = () => {
    console.log("added");
  };

  return (
    <div className="flex flex-col gap-4">
      <li>
        <label>Date</label>
      </li>
      <li>
        <input
          className="text-black"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </li>
      <ExerciseListAddDisplay
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
      />

      <li className="flex flex-col gap-2">
        <MapExercises list={exerciseList} onListChange={setExerciseList} />
      </li>
      <li>
        <Button text="Submit" onClick={handleSubmit} />
      </li>
    </div>
  );
};

export default AddExerciseContent;
