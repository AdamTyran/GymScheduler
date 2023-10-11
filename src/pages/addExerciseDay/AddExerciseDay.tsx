import React from "react";
import { AddExerciseDayButton } from "./AddExerciseDayButtons";
import { ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

//adding until API doesn't exist

interface Props {
  buttons: AddExerciseDayButton[];
  exercises: ExerciseList[];
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
}

const AddExerciseDay = ({ buttons, exercises, newItem, setNewItem }: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ul>
        <AddExerciseContent
          buttons={buttons}
          exercises={exercises}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      </ul>
    </form>
  );
};

export default AddExerciseDay;

// Add exercise
// <form onSubmit={(e) => e.preventDefault()}>
//   {buttons.map((item) => (
//     <div key={item.id}>
//       <label>{item.name}</label>
//       <div>
//         <input type="text" />
//       </div>
//     </div>
//   ))}
// </form>
