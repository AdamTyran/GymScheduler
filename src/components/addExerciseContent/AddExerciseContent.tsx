import React, { useState } from "react";
import { ExerciseItem, ExerciseList } from "../../pages/mainPage/MainPage";
import ExerciseListAddDisplay from "../exerciseListAddDisplay/ExerciseListAddDisplay";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";
import Button from "../button/Button";
import "react-calendar/dist/Calendar.css";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseContent = ({ exerciseList, setExerciseList }: Props) => {
  const [date, setDate] = useState<string>("");
  const onRepsChange = (value: number | undefined, index: number) => {
    const newList = [...exerciseList];
    newList[index].reps = value;
    setExerciseList(newList);
  };
  const onSetsChange = (value: number | undefined, index: number) => {
    const newList = [...exerciseList];
    newList[index].sets = value;
    setExerciseList(newList);
  };

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
      {/* <li className="flex justify-center">
        <Calendar className="rounded-xl text-black" />
      </li> */}
      <ExerciseListAddDisplay
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
      />

      <li className="flex flex-col gap-2">
        {exerciseList.map((item, index) => (
          <React.Fragment key={item.id}>
            {item.name}
            <div className="flex flex-row justify-center gap-4 mb-4">
              <InputNumberTextfield
                name="sets"
                value={item.sets}
                onChange={(val: number | undefined) => onSetsChange(val, index)}
              />
              <InputNumberTextfield
                name="reps"
                value={item.reps}
                onChange={(val: number | undefined) => onRepsChange(val, index)}
              />
            </div>
          </React.Fragment>
        ))}
      </li>
      <li>
        <Button text="Submit" onClick={handleSubmit} />
      </li>
    </div>
  );
};

export default AddExerciseContent;
