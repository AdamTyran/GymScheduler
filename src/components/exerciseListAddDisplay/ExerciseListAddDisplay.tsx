import React, { useRef, useState } from "react";
import { ExerciseList } from "../../pages/mainPage/MainPage";
import AddExerciseTextfield from "../addExerciseTextfield/AddExerciseTextfield";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const ExerciseListAddDisplay = ({ exerciseList, setExerciseList }: Props) => {
  const inputRef = useRef();
  const [newItem, setNewItem] = useState("");
  const addItem = (itemName: string) => {
    const id = exerciseList.length
      ? exerciseList[exerciseList.length - 1].id + 1
      : 1;
    const newExercise = { id: id, name: itemName, sets: 3, reps: 12 };
    setExerciseList([...exerciseList, newExercise]);
    setNewItem("");
  };

  return (
    <div>
      <li>
        <label>Exercises</label>
      </li>
      <li>
        <AddExerciseTextfield newItem={newItem} setNewItem={setNewItem} />
        <button className="bg-orange-500" onClick={() => addItem(newItem)}>
          Add
        </button>
      </li>
    </div>
  );
};

export default ExerciseListAddDisplay;
//TODO add onClick
