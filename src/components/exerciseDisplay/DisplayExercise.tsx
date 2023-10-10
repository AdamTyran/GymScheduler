import React from "react";
import exercises from "./ExercisesData";

interface FullExercise {
  id: number;
  name: string;
  series: number;
  repetitions: number;
}

interface ExerciseDay {
  id: number;
  date: string;
  exercises: FullExercise[];
}

const randomDay: ExerciseDay = {
  id: 1,
  date: "08.10.2023",
  exercises: [
    { id: 1, name: exercises[1].name, series: 3, repetitions: 12 },
    { id: 2, name: exercises[2].name, series: 3, repetitions: 12 },
    { id: 3, name: exercises[3].name, series: 3, repetitions: 12 },
    { id: 4, name: exercises[4].name, series: 3, repetitions: 12 },
    { id: 5, name: exercises[5].name, series: 3, repetitions: 12 },
  ],
};

const DisplayExercise = () => {
  return (
    <div className="flex-col border-4 border-amber-400 w-full">
      <ul>
        <li>{randomDay.date}</li>
        {randomDay.exercises.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <li>
              {item.series} x {item.repetitions}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayExercise;
