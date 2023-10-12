import React from "react";

interface Props {
  newItem: string;
  setNewItem(arg: string): void;
}

const AddExerciseTextfield = ({ newItem, setNewItem }: Props) => {
  return (
    <div>
      <input
        autoFocus
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
    </div>
  );
};

export default AddExerciseTextfield;
//TODO add onClick
