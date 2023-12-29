import { useState } from "react";
import { Exercise } from "../../utils/interfaces";
import StringTextfield from "../stringTextfield/StringTextfield";
import Button from "../button/Button";

interface Props {
  exerciseList: Exercise[];
  setExerciseList(args: Exercise[]): void;
}

const InputAdd = ({ exerciseList, setExerciseList }: Props) => {
  const [newItem, setNewItem] = useState("");
  const addItem = (itemName: string) => {
    if (itemName === "") return;
    const newExercise = {
      name: itemName,
      sets: 0,
      reps: 0,
    };
    setExerciseList([...exerciseList, newExercise]);
    setNewItem("");
  };

  return (
    <div className="relative block text-gray-400 ">
      <StringTextfield
        text="Input Exercise!"
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <div className="absolute right-2.5 bottom-2.5">
        <Button
          className="bg-blue-700 hover:bg-blue-800"
          text="Add"
          onClick={() => addItem(newItem)}
        />
      </div>
    </div>
  );
};

export default InputAdd;
