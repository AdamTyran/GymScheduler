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
    <div className="relative block text-gray-400 focus-within:text-gray-600">
      <li>
        <AddExerciseTextfield
          textboxName="Exercises"
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <button
          // className="w-5 h-5 ml-3"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => addItem(newItem)}
        >
          Add
        </button>
      </li>
    </div>
  );
};

export default ExerciseListAddDisplay;
