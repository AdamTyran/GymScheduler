import React from "react";
import Navbar from "../navbar/Navbar";
import DisplayExerciseDay from "../exerciseDisplay/DisplayExercise";
import buttons from "../navbar/Buttons";

const MainPage = () => {
  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar buttons={buttons} />
      <DisplayExerciseDay />
    </div>
  );
};

export default MainPage;
