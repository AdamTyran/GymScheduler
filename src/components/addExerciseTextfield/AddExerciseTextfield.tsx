import React, { useRef } from "react";

interface Props {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
}

const AddExerciseTextfield = ({ newItem, setNewItem }: Props) => {
  const inputRef = useRef();

  return (
    <div>
      <li>
        <label>Exercises</label>
      </li>
      <li>
        <input
          autoFocus
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button className="bg-orange-500 gap-5">Add</button>
      </li>
      <li>{newItem}</li>
    </div>
  );
};

export default AddExerciseTextfield;
//TODO add onClick
