import React, { useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";

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
    <div>
      <li>
        <label>Exercises</label>
      </li>
      <li>
        <AddExerciseTextfield
          textboxName="Exercises"
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <button className="bg-orange-500" onClick={() => addItem(newItem)}>
          Add
        </button>
      </li>
    </div>
  );
};

export default ExerciseListAddDisplay;
