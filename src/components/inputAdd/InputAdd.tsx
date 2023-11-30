import React, { useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";
import Button from "../button/Button";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const InputAdd = ({ exerciseList, setExerciseList }: Props) => {
  const [newItem, setNewItem] = useState<string>("");
  const addItem = (itemName: string) => {
    if (itemName === "") return;
    const id = exerciseList.length
      ? exerciseList[exerciseList.length - 1].id + 1
      : 1;
    const newExercise = { id: id, name: itemName, sets: 0, reps: 0 };
    setExerciseList([...exerciseList, newExercise]);
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
        <Button
          // eslint-disable-next-line react/style-prop-object
          style="bg-blue-700 hover:bg-blue-800"
          text="Add"
          onClick={() => addItem(newItem)}
        />
      </div>
    </div>
  );
};

export default InputAdd;
