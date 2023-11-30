import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import MapExercises from "../../components/mapExercises/MapExercises";
import Button from "../../components/button/Button";
import AddExerciseDay from "../../components/addExerciseDay/AddExerciseDay";
import handleChange from "../../utils/handleChange";
import InputEdit from "../../components/inputEdit/InputEdit";
import handleDelete from "../../utils/handleDelete";

const ExerciseCalendar = () => {
  const { data } = useAxiosFetch<ExerciseItem[]>([]);
  const [clickedDate, setClickedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [clickedDay, setClickedDay] = useState<ExerciseItem>();
  const [newExerciseDay, setNewExerciseDay] = useState<ExerciseList[]>([]);
  const onListChange = (val: ExerciseList[]) => {
    if (!clickedDay) return;
    const newClickedDay: ExerciseItem = { ...clickedDay };
    newClickedDay.exercises = val;
    setClickedDay(newClickedDay);
  };
  const onInputChange = (val: ExerciseList) => {
    if (!clickedDay) return;
    const correctedDay: ExerciseItem = { ...clickedDay };
    correctedDay.exercises.push(val);
    setClickedDay(correctedDay);
  };

  useEffect(() => {
    setClickedDay(data?.find((item) => item.date === clickedDate));
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="w-full px-2 pt-10 mx-auto flex flex-col items-center text-center">
      <Calendar
        onClickDay={(value) => {
          const date = value.toLocaleDateString();
          setClickedDay(data?.find((item) => item.date === date));
          setClickedDate(date);
        }}
        defaultValue={new Date()}
      />
      <div className="mt-5 text-white min-w-[360px] text-lg">
        {clickedDay && (
          <React.Fragment>
            <InputEdit
              exerciseList={clickedDay.exercises}
              onInputChange={onInputChange}
            />
            <MapExercises
              list={clickedDay.exercises}
              onListChange={onListChange}
            />
            <Button
              text="Update Day"
              onClick={() =>
                handleChange({
                  selectedDay: clickedDay,
                  updatedExerciseList: clickedDay?.exercises,
                  setter: setClickedDay,
                })
              }
            />
            <Button
              text="Delete day"
              onClick={() =>
                handleDelete({ day: clickedDay, setter: setClickedDay })
              }
            />
          </React.Fragment>
        )}
        {!clickedDay && (
          <AddExerciseDay
            setter={setClickedDay}
            clickedDate={clickedDate}
            newExerciseDay={newExerciseDay}
            setNewExerciseDay={setNewExerciseDay}
          />
        )}
      </div>
    </div>
  );
};

export default ExerciseCalendar;
