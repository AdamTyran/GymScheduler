import React from "react";
import Navbar from "../navbar/Navbar";
import ExerciseDisplay from "../exerciseDisplay/ExerciseDisplay";

const MainPage = () => {
  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar />
      <ExerciseDisplay />
    </div>
  );
};

export default MainPage;
