import React from "react";

interface Props {
  textboxName: string;
  newItem: string;
  setNewItem(arg: string): void;
}

const AddExerciseTextfield = ({ textboxName, newItem, setNewItem }: Props) => {
  return (
    <div>
      <label>{textboxName}</label>
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
