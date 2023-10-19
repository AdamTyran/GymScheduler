import React from "react";
import { ExerciseList } from "../mainPage/MainPage";
import AddExerciseContent from "../../components/addExerciseContent/AddExerciseContent";

//adding until API doesn't exist

interface Props {
  exerciseList: ExerciseList[];
  setExerciseList(list: ExerciseList[]): void;
}

const AddExerciseDay = ({ exerciseList, setExerciseList }: Props) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md px-2 mx-auto"
    >
      <ul className="flex flex-col gap-4">
        <AddExerciseContent
          exerciseList={exerciseList}
          setExerciseList={setExerciseList}
        />
        {exerciseList.map((item) => (
          <div key={item.id}>
            {item.name}
            {item.sets}
            {item.reps}
          </div>
        ))}
      </ul>
    </form>
  );
};

export default AddExerciseDay;
