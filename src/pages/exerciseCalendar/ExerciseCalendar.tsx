import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ExerciseCalendar = () => {
  const fetchExerciseDay = (value: any) => {
    console.log(value);
    console.log(typeof value);
  };

  return (
    <div className=" max-w-md px-2 pt-10 mx-auto">
      <Calendar
        className="text-black h-1/2 w-1/2"
        onClickDay={(value) => fetchExerciseDay(value)}
      />
    </div>
  );
};

export default ExerciseCalendar;
