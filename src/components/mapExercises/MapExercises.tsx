import React from "react";
import InputNumberTextfield from "../inputNumberTextfield/InputNumberTextfield";
import { ExerciseList } from "../../pages/mainPage/MainPage";

interface Props {
  list: ExerciseList[];
  onListChange(list: ExerciseList[]): void;
}

const MapExercises = ({ list, onListChange }: Props) => {
  const onRepsChange = (value: number | undefined, index: number) => {
    const newList = [...list];
    newList[index].reps = value;
    onListChange(newList);
  };
  const onSetsChange = (value: number | undefined, index: number) => {
    const newList = [...list];
    newList[index].sets = value;
    onListChange(newList);
  };

  return (
    <div>
      {list.map((item, index) => (
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
    </div>
  );
};

export default MapExercises;
