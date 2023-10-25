import React, { useState } from "react";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseDay = () => {
  const [newDay, setNewDay] = useState<ExerciseList[]>([]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md px-2 mx-auto"
    >
      <ul className="flex flex-col gap-4">
        <AddExerciseContent exerciseList={newDay} setExerciseList={setNewDay} />
        {/* {exerciseList.map((item) => (
          <React.Fragment key={item.id}>
            <p>{item.name}</p>
            {item.sets}
            {item.reps}
          </React.Fragment>
        )
        )} */}
      </ul>
    </form>
  );
};

export default AddExerciseDay;
