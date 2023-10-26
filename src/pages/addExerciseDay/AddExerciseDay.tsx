import React, { useState } from "react";
import { ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

const AddExerciseDay = () => {
  const [newDay, setNewDay] = useState<ExerciseList[]>([]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md px-2 mx-auto"
    >
      <ul className="flex flex-col gap-4">
        <AddExerciseContent exerciseList={newDay} setExerciseList={setNewDay} />
      </ul>
    </form>
  );
};

export default AddExerciseDay;
