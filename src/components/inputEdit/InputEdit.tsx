import { useState } from "react";
import { Exercise } from "../../utils/interfaces";
import StringTextfield from "../stringTextfield/StringTextfield";
import Button from "../button/Button";

interface Props {
  exerciseList: Exercise[];
  onInputChange(val: Exercise): void;
}

const InputEdit = ({ exerciseList, onInputChange }: Props) => {
  const [newItem, setNewItem] = useState("");
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

export default InputEdit;
