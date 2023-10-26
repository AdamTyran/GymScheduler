import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem } from "../mainPage/MainPage";

const ExerciseCalendar = () => {
  const url = "http://localhost:3500/exerciseDay";
  // const [date, setDate] = useState<Object | undefined>(
  //   new Date().toLocaleDateString()
  // );
  const { data } = useAxiosFetch<ExerciseItem[]>(url, []);
  // let clickedDay: ExerciseItem | undefined = undefined;
  const [clickedDay, setClickedDay] = useState<ExerciseItem | undefined>(
    undefined
  );

  const log = () => {
    console.log(data);
    data?.map((item) => console.log(item));
  };

  return (
    <div className="px-2 pt-10 mx-auto flex flex-col">
      <Calendar
        onClickDay={(value) => {
          const date = value.toLocaleDateString();
          setClickedDay(data?.find((item) => item.date === date));
        }}
      />
      <div className="mt-5 text-white text-lg">
        {clickedDay &&
          clickedDay?.exercises.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.sets}</p>
              <p>{item.reps}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExerciseCalendar;
