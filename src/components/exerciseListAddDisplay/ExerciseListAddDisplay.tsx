import React, { useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";
import Button from "../button/Button";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
  sets: number;
  reps: number;
}

const ExerciseListAddDisplay = ({
  exerciseList,
  setExerciseList,
  sets,
  reps,
}: Props) => {
  const [newItem, setNewItem] = useState("");
  const addItem = (itemName: string) => {
    if (itemName === "") return;
    const id = exerciseList.length
      ? exerciseList[exerciseList.length - 1].id + 1
      : 1;
    const newExercise = { id: id, name: itemName, sets: sets, reps: reps };
    setExerciseList([...exerciseList, newExercise]);
    setNewItem("");
  };

  return (
    <div className="relative block text-gray-400 ">
      <li>
        <AddExerciseTextfield
          text="Input Exercise!"
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <div className="absolute right-2.5 bottom-2.5">
          <Button text="Add" func={addItem} args={newItem} />
        </div>
      </li>
    </div>
  );
};

export default ExerciseListAddDisplay;
