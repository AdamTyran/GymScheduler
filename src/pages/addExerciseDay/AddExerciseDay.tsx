import React, { useState } from "react";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

interface Props {
  clickedDate: string;
  clickedDay: ExerciseItem | undefined;
  newExerciseDay: ExerciseList[];
  setNewExerciseDay(list: ExerciseList[]): void;
}

const AddExerciseDay = ({
  clickedDate,
  clickedDay,
  newExerciseDay,
  setNewExerciseDay,
}: Props) => {
  const [newDay, setNewDay] = useState<ExerciseList[]>([]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md px-2 mx-auto"
    >
      <ul className="flex flex-col gap-4">
        <AddExerciseContent
          exerciseList={newDay}
          setExerciseList={setNewDay}
          clickedDate={clickedDate}
          clickedDay={clickedDay}
          newExerciseDay={newExerciseDay}
          setNewExerciseDay={setNewExerciseDay}
        />
      </ul>
    </form>
  );
};

export default AddExerciseDay;
