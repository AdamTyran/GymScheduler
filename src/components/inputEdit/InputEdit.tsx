import React, { useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";
import Button from "../button/Button";

interface Props {
  exerciseList: ExerciseList[];
  onInputChange(val: ExerciseList): void;
}

const InputEdit = ({ exerciseList, onInputChange }: Props) => {
  const [newItem, setNewItem] = useState<string>("");
  const addItem = (itemName: string) => {
    if (itemName === "") return;
    const id = exerciseList.length
      ? exerciseList[exerciseList.length - 1].id + 1
      : 1;
    const newExercise = { id: id, name: itemName, sets: 0, reps: 0 };
    onInputChange(newExercise);
    setNewItem("");
  };

  return (
    <div className="relative block text-gray-400 ">
      <AddExerciseTextfield
        text="Input Exercise!"
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <div className="absolute right-2.5 bottom-2.5">
        <Button text="Add" onClick={() => addItem(newItem)} />
      </div>
    </div>
  );
};

export default InputEdit;
