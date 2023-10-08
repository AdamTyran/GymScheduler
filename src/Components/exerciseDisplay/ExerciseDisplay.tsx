import React from "react";
import exercises from "./exercisesList";

const ExerciseDisplay = () => {
  return (
    <div className="flex-col border-4 border-amber-400 w-full">
      {exercises.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDisplay;
