import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseList } from "../mainPage/MainPage";

const ExerciseCalendar = () => {
  const url = "http://localhost:3500/exercises";
  const [date, setDate] = useState<Object | undefined>(
    new Date().toLocaleDateString()
  );
  const [fetchedData, setFetchedData] = useState<ExerciseList[] | undefined>(
    []
  );
  const { data } = useAxiosFetch<ExerciseList[]>(url);

  useEffect(() => {
    setFetchedData(data);
  }, [data]);

  const log = () => {
    console.log(fetchedData);
    fetchedData?.map((item) => console.log(item));
  };

  return (
    <div className="px-2 pt-10 mx-auto flex justify-center">
      <Calendar
        // onClickDay={(value) => setDate(value.toLocaleDateString())}
        onClickDay={log}
      />
      {/* <div>{date && date.toString()}</div> */}
    </div>
  );
};

export default ExerciseCalendar;
