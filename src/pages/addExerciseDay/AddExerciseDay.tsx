import React, { useState } from "react";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

interface Props {
  clickedDate: string;
  newExerciseDay: ExerciseList[];
  setNewExerciseDay(list: ExerciseList[]): void;
}

const AddExerciseDay = ({
  clickedDate,
  newExerciseDay,
  setNewExerciseDay,
}: Props) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md px-2 mx-auto"
    >
      <ul className="flex flex-col gap-4">
        <AddExerciseContent
          exerciseList={newExerciseDay}
          setExerciseList={setNewExerciseDay}
          clickedDate={clickedDate}
        />
      </ul>
    </form>
  );
};

export default AddExerciseDay;
