import React from "react";
import Navbar from "../navbar/Navbar";
import DisplayExercise from "../exerciseDisplay/DisplayExercise";
import buttons from "../navbar/Buttons";

const MainPage = () => {
  return (
    <div className="bg-sky-600 h-[90vh] flex ">
      <Navbar buttons={buttons} />
      <DisplayExercise />
    </div>
  );
};

export default MainPage;
