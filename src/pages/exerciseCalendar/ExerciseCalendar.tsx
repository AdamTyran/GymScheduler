import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem } from "../mainPage/MainPage";

const ExerciseCalendar = () => {
  const url = "http://localhost:3500/exerciseDay";
  const [date, setDate] = useState<Object | undefined>(
    new Date().toLocaleDateString()
  );
  const { data } = useAxiosFetch<ExerciseItem[]>(url, []);

  const log = () => {
    console.log(data);
    data?.map((item) => console.log(item));
  };

  return (
    <div className="px-2 pt-10 mx-auto flex justify-center">
      <Calendar
        // onClickDay={(value) => setDate(value.toLocaleDateString())}
        // onClickDay={log}
        onClickDay={(value) => {
          const date = value.toLocaleDateString();
          // data?.find((item => item[value]))
        }}
      />
      {/* <div>{date && date.toString()}</div> */}
    </div>
  );
};

export default ExerciseCalendar;
