import React from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";

interface Props {
  exerciseList: ExerciseList[];
  value: number;
  onChange(arg: number): void;
}

const ShowExerciseDetails = ({ exerciseList, value, onChange }: Props) => {
  return (
    <div>
      {exerciseList.map((item) => (
        <div key={item.id} className="block p-4 pl-10 w-full">
          {item.name}
          <InputNumberTextfield name="sets" value={value} onChange={onChange} />
          <InputNumberTextfield name="reps" value={value} onChange={onChange} />
        </div>
      ))}
    </div>
  );
};

export default ShowExerciseDetails;
