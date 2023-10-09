import React from "react";
import exercises from "./ExercisesList";

interface Exercises {
  name: string;
  series: number;
  repetitions: number;
}

interface ExerciseDay {
  id: number;
  date: string;
  exercises: Exercises[];
}

const randomDay: ExerciseDay = {
  id: 1,
  date: "08.10.2023",
  exercises: [
    { name: exercises[1].name, series: 3, repetitions: 12 },
    { name: exercises[2].name, series: 3, repetitions: 12 },
    { name: exercises[3].name, series: 3, repetitions: 12 },
    { name: exercises[4].name, series: 3, repetitions: 12 },
    { name: exercises[5].name, series: 3, repetitions: 12 },
  ],
};

const DisplayExercise = () => {
  return (
    <div className="flex-col border-4 border-amber-400 w-full">
      <div>
        <div>{randomDay.date}</div>
        <div>
          {randomDay.exercises.map((item) => (
            <div key={randomDay.id}>
              <div>{item.name}</div>
              <div>
                {item.series} x {item.repetitions}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayExercise;
