import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import MapExercises from "../../components/mapExercises/MapExercises";
import Button from "../../components/button/Button";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";

const ExerciseCalendar = () => {
  const url = "http://localhost:3500/exerciseDay";
  const { data } = useAxiosFetch<ExerciseItem[]>(url, []);
  const [clickedDay, setClickedDay] = useState<ExerciseItem | undefined>(
    undefined
  );
  const onListChange = (val: ExerciseList[]) => {
    if (!clickedDay) return;
    const newClickedDay: ExerciseItem = { ...clickedDay };
    newClickedDay.exercises = val;
    setClickedDay(newClickedDay);
  };

  return (
    <div className="px-2 pt-10 mx-auto flex flex-col">
      <Calendar
        onClickDay={(value) => {
          const date = value.toLocaleDateString();
          setClickedDay(data?.find((item) => item.date === date));
          console.log(value);
        }}
        defaultValue={new Date()}
      />
      <div className="mt-5 text-white text-lg">
        {clickedDay && (
          <div>
            <MapExercises
              list={clickedDay?.exercises}
              onListChange={onListChange}
            />
            <Button text="Update Day" onClick={() => console.log("changed")} />
          </div>
        )}
        {!clickedDay && <AddExerciseDay />}
      </div>
    </div>
  );
};

export default ExerciseCalendar;
