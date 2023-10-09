import React from "react";
import Navbar from "../navbar/Navbar";
import DisplayExerciseDay from "../exerciseDisplay/DisplayExercise";

const MainPage = () => {
  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar />
      <DisplayExerciseDay />
    </div>
  );
};

export default MainPage;
