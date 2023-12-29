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
  const [clickedExerciseDaySet, setClickedExerciseDaySet] =
    useState<ExerciseSet>();
  const [newExerciseDaySet, setNewExerciseDaySet] = useState<Exercise[]>([]);
  const onListChange = (val: Exercise[]) => {
    if (!clickedExerciseDaySet) return;
    const newClickedDaySet: ExerciseSet = { ...clickedExerciseDaySet };
    newClickedDaySet.exercises = val;
    setClickedExerciseDaySet(newClickedDaySet);
  };
  const onInputChange = (val: Exercise) => {
    if (!clickedExerciseDaySet) return;
    const correctedExerciseDaySet: ExerciseSet = { ...clickedExerciseDaySet };
    correctedExerciseDaySet.exercises.push(val);
    setClickedExerciseDaySet(correctedExerciseDaySet);
  };

  const findExerciseSetOnDate = (item: ExerciseSet, date: Date): boolean => {
    const itemDate: Date = new Date(item.date);
    return (
      itemDate.getDate() === date.getDate() &&
      itemDate.getMonth() === date.getMonth() &&
      itemDate.getFullYear() === date.getFullYear()
    );
  };

  useEffect(() => {
    setClickedExerciseDaySet(
      data?.find((item) => {
        return findExerciseSetOnDate(item, clickedDate);
      })
    );
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="w-full px-2 pt-10 mx-auto flex flex-col items-center text-center">
      <Calendar
        onClickDay={(value) => {
          const date = new Date(value);
          setClickedExerciseDaySet(
            data?.find((item) => {
              return findExerciseSetOnDate(item, date);
            })
          );
          setClickedDate(value);
        }}
        defaultValue={new Date()}
      />
      <div className="mt-5 text-white min-w-[360px] text-lg">
        {clickedExerciseDaySet && (
          <React.Fragment>
            <InputEdit
              exerciseList={clickedExerciseDaySet.exercises}
              onInputChange={onInputChange}
            />
            <MapList
              list={clickedExerciseDaySet.exercises}
              onListChange={onListChange}
            />
            <Button
              className="bg-blue-700 hover:bg-blue-800"
              text="Update Day"
              onClick={() =>
                handleChange({
                  selectedDay: clickedExerciseDaySet,
                  updatedExerciseList: clickedExerciseDaySet?.exercises,
                  setter: setClickedExerciseDaySet,
                })
              }
            />
            <Button
              className="bg-red-700 hover:bg-red-800"
              text="Delete day"
              onClick={() =>
                handleDelete({
                  day: clickedExerciseDaySet,
                  setter: setClickedExerciseDaySet,
                })
              }
            />
          </React.Fragment>
        )}
        {!clickedExerciseDaySet && (
          <Form
            setter={setClickedExerciseDaySet}
            clickedDate={clickedDate}
            newExerciseDaySet={newExerciseDaySet}
            setNewExerciseDaySet={setNewExerciseDaySet}
          />
        )}
      </div>
    </div>
  );
};

export default ExerciseCalendar;
