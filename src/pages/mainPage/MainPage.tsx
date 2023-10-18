import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/navbar/NavbarButtons";
import { Route, Routes } from "react-router-dom";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import { addExerciseDayButtons } from "../addExerciseDay/AddExerciseDayButtons";

export interface ExerciseList {
  id: number;
  name: string;
  sets: number | undefined;
  reps: number | undefined;
}

const MainPage = () => {
  useEffect(() => {
    setExerciseList([
      {
        id: 1,
        name: "deadlift",
        sets: 3,
        reps: 12,
      },
      {
        id: 2,
        name: "deadlift",
        sets: 3,
        reps: 12,
      },
      {
        id: 3,
        name: "deadlift",
        sets: 3,
        reps: 12,
      },
    ]);
  }, []);
  const [exerciseList, setExerciseList] = useState<ExerciseList[]>([]);

  return (
    <div className="bg-gray-900 h-[90vh] flex text-white">
      <Navbar buttons={buttons} />
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route
          path="/addexercise"
          element={
            <AddExerciseDay
              exerciseList={exerciseList}
              setExerciseList={setExerciseList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MainPage;
