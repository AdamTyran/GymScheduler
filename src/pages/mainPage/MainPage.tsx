import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/navbar/NavbarButtons";
import { Route, Routes } from "react-router-dom";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import { addExerciseDayButtons } from "../addExerciseDay/AddExerciseDayButtons";

const MainPage = () => {
  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar buttons={buttons} />
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route
          path="/addexercise"
          element={<AddExerciseDay buttons={addExerciseDayButtons} />}
        />
      </Routes>
    </div>
  );
};

export default MainPage;
