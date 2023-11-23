import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { ExerciseItem, ExerciseList } from "../mainPage/MainPage";
import MapExercises from "../../components/mapExercises/MapExercises";
import Button from "../../components/button/Button";
import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import handleChange from "../../utils/handleChange";
import InputAdd from "../../components/inputAdd/InputAdd";
import InputEdit from "../../components/inputEdit/InputEdit";
import handleDelete from "../../utils/handleDelete";

const ExerciseCalendar = () => {
  const url = "http://localhost:3500/exerciseDay";
  const { data } = useAxiosFetch<ExerciseItem[]>(url, []);
  const [clickedDate, setClickedDate] = useState<string>(
    new Date().toLocaleDateString()
  );
  const [clickedDay, setClickedDay] = useState<ExerciseItem | undefined>(
    undefined
  );
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

  return (
    <div className="px-2 pt-10 mx-auto flex flex-col">
      <Calendar
        onClickDay={(value) => {
          const date = value.toLocaleDateString();
          setClickedDay(data?.find((item) => item.date === date));
          setClickedDate(value.toLocaleDateString());
        }}
        defaultValue={new Date()}
      />
      <div className="mt-5 text-white text-lg">
        {clickedDay && (
          <div>
            {/*Change it to correct values */}
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
          </div>
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
