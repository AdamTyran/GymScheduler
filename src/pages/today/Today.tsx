import React from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem } from "../mainPage/MainPage";
import { Link } from "react-router-dom";

const Today = () => {
  const { data } = useAxiosFetch<ExerciseItem[]>([]);
  const todayDate = new Date().toLocaleDateString();
  const todayList = data?.find((item) => item.date === todayDate);

  return (
    <div className="w-full  text-center  mt-5 gap-3">
      {todayList &&
        todayList.exercises.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <label className="text-xl lg:text-3xl">{item.name}</label>
            <div className="flex flex-row justify-center gap-2">
              <div className="text-2xl">
                <label className="m-2">reps</label>
                {item.reps}
              </div>
              <div className="text-2xl">
                <label className="m-2">sets</label>
                {item.sets}
              </div>
            </div>
          </div>
        ))}
      {!todayList && (
        <div className="w-full h-full flex items-center justify-center text-5xl">
          <Link to="/calendar">
            Click on the text to go to calendar and add new exercises!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Today;
