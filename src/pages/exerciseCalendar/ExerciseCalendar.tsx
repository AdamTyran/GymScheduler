import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

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
        // onClickDay={(value) => fetchExerciseDay(value)}
        onClickDay={(value) => setDate(value.toLocaleDateString())}
      />
      {/* <div>{date && date.toString()}</div> */}
    </div>
  );
};

export default ExerciseCalendar;
