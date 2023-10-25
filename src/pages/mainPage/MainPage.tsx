import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/sidebar/SidebarButtons";
import { Route, Routes } from "react-router-dom";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import ExerciseCalendar from "../exerciseCalendar/ExerciseCalendar";

export interface ExerciseItem {
  date: string;
  exercises: ExerciseList[];
}

export interface ExerciseList {
  id: number;
  name: string;
  sets: number | undefined;
  reps: number | undefined;
}

const MainPage = () => {
  //TODO delete this useEffect when db is ready
  useEffect(() => {
    setExerciseList([
      {
        date: "25.10.2023",
        exercises: [
          { id: 1, name: "deadlift", sets: 3, reps: 12 },
          { id: 2, name: "deadlift", sets: 3, reps: 12 },
          { id: 3, name: "deadlift", sets: 3, reps: 12 },
        ],
      },
      {
        date: "26.10.2023",
        exercises: [
          { id: 1, name: "deadlift", sets: 3, reps: 12 },
          { id: 2, name: "deadlift", sets: 3, reps: 12 },
          { id: 3, name: "deadlift", sets: 3, reps: 12 },
        ],
      },
    ]);
  }, []);
  const [exerciseList, setExerciseList] = useState<ExerciseItem[]>([]);

  return (
    <div className="bg-gray-900 min-h-full flex text-white">
      <Sidebar buttons={buttons} />
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route path="/calendar" element={<ExerciseCalendar />} />
        <Route path="/addexercise" element={<AddExerciseDay />} />
      </Routes>
    </div>
  );
};

export default MainPage;
