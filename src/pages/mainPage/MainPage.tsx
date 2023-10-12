import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/navbar/NavbarButtons";
import { Route, Routes } from "react-router-dom";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import { addExerciseDayButtons } from "../addExerciseDay/AddExerciseDayButtons";

export interface ExerciseList {
  id: number;
  name: string;
  sets: number;
  reps: number;
}

const MainPage = () => {
  const [exerciseList, setExerciseList] = useState([
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

  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar buttons={buttons} />
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route
          path="/addexercise"
          element={
            <AddExerciseDay
              buttons={addExerciseDayButtons}
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
