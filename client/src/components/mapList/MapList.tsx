import React from "react";
import NumberTextfield from "../numberTextfield/NumberTextfield";
import { Exercise } from "../../utils/interfaces";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Types } from "mongoose";

interface Props {
  list: Exercise[];
  onListChange(args: Exercise[]): void;
}

const MapList = ({ list, onListChange }: Props) => {
  const onRepsChange = (value: number | undefined, index: number) => {
    const newList = [...list];
    newList[index].reps = value;
    onListChange(newList);
  };
  const onSetsChange = (value: number | undefined, index: number) => {
    const newList = [...list];
    newList[index].sets = value;
    onListChange(newList);
  };
  const deleteEntry = (id: string) => {
    const listCopy = [...list];
    const newList = listCopy.filter((item) => item._id !== id);
    onListChange(newList);
  };

  return (
    <div>
      {list.map((item, index) => (
        <React.Fragment key={item._id}>
          {item.name}
          <div className="flex flex-row justify-center gap-4 mb-4">
            <NumberTextfield
              name="sets"
              value={item.sets}
              onChange={(val: number | undefined) => onSetsChange(val, index)}
            />
            <NumberTextfield
              name="reps"
              value={item.reps}
              onChange={(val: number | undefined) => onRepsChange(val, index)}
            />
            <button onClick={() => deleteEntry(item._id)}>
              <MdOutlineDeleteForever className="h-8 w-8" />
            </button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MapList;
