import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ExerciseCalendar = () => {
  const [date, setDate] = useState<Object | undefined>(
    new Date().toLocaleDateString()
  );

  const fetchExerciseDay = (value: any) => {
    console.log(value);
    console.log(typeof value);
  };

  return (
    <div className="px-2 pt-10 mx-auto w-screen flex justify-center">
      <Calendar
        className="text-black h-1/2 w-max"
        // onClickDay={(value) => fetchExerciseDay(value)}
        onClickDay={(value) => setDate(value.toLocaleDateString())}
      />
      <div>{date && date.toString()}</div>
    </div>
  );
};

export default ExerciseCalendar;
