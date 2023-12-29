import React from "react";
import NumberTextfield from "../numberTextfield/NumberTextfield";
import { Exercise } from "../../utils/interfaces";
import { MdOutlineDeleteForever } from "react-icons/md";

interface Props {
  list: Exercise[];
  onListChange(args: Exercise[]): void;
}

const MapList = ({ list, onListChange }: Props) => {
  const onRepsChange = (value: number, index: number) => {
    const newList = [...list];
    newList[index].reps = value;
    onListChange(newList);
  };
  const onSetsChange = (value: number, index: number) => {
    const newList = [...list];
    newList[index].sets = value;
    onListChange(newList);
  };
  const deleteEntry = (index: number, id?: string) => {
    const listCopy = [...list];

    console.log(index);
    console.log(listCopy);

    // const newList = listCopy.splice(index, 1);
    const newList = listCopy.filter((item, i) => {
      if (id) {
        return item._id !== id;
      }
      return index !== i;
    });
    console.log(newList);
    onListChange(newList);
  };

  return (
    <div>
      {list.map((item, index) => (
        <React.Fragment key={item?._id ?? index}>
          {item.name}
          <div className="flex flex-row justify-center gap-4 mb-4">
            <NumberTextfield
              name="sets"
              value={item.sets}
              onChange={(val: number) => onSetsChange(val, index)}
            />
            <NumberTextfield
              name="reps"
              value={item.reps}
              onChange={(val: number) => onRepsChange(val, index)}
            />
            <button onClick={() => deleteEntry(index, item._id)}>
              <MdOutlineDeleteForever className="h-8 w-8" />
            </button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MapList;
