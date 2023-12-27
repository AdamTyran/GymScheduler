import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseSet, Exercise } from "../../utils/interfaces";
import MapList from "../../components/mapList/MapList";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import handleChange from "../../utils/handleChange";
import InputEdit from "../../components/inputEdit/InputEdit";
import handleDelete from "../../utils/handleDelete";

const ExerciseCalendar = () => {
  const { data } = useAxiosFetch<ExerciseSet[]>([]);
  const [clickedDate, setClickedDate] = useState(new Date());
  const [clickedDay, setClickedDay] = useState<ExerciseSet>();
  const [newExerciseDay, setNewExerciseDay] = useState<Exercise[]>([]);
  const onListChange = (val: Exercise[]) => {
    if (!clickedDay) return;
    const newClickedDay: ExerciseSet = { ...clickedDay };
    newClickedDay.exercises = val;
    setClickedDay(newClickedDay);
  };
  const onInputChange = (val: Exercise) => {
    if (!clickedDay) return;
    const correctedDay: ExerciseSet = { ...clickedDay };
    correctedDay.exercises.push(val);
    setClickedDay(correctedDay);
  };

  useEffect(() => {
    setClickedDay(
      data?.find((item) => {
        const itemDate: Date = new Date(item.date);
        return (
          itemDate.getDate() === clickedDate.getDate() &&
          itemDate.getMonth() === clickedDate.getMonth() &&
          itemDate.getFullYear() === clickedDate.getFullYear()
        );
      })
    );
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="w-full px-2 pt-10 mx-auto flex flex-col items-center text-center">
      <Calendar
        onClickDay={(value) => {
          const date = new Date(value);
          setClickedDay(
            data?.find((item) => {
              const itemDate: Date = new Date(item.date);
              return (
                itemDate.getDate() === date.getDate() &&
                itemDate.getMonth() === date.getMonth() &&
                itemDate.getFullYear() === date.getFullYear()
              );
            })
          );
          setClickedDate(value);
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
            <MapList list={clickedDay.exercises} onListChange={onListChange} />
            <Button
              className="bg-blue-700 hover:bg-blue-800"
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
              className="bg-red-700 hover:bg-red-800"
              text="Delete day"
              onClick={() =>
                handleDelete({ day: clickedDay, setter: setClickedDay })
              }
            />
          </React.Fragment>
        )}
        {!clickedDay && (
          <Form
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
