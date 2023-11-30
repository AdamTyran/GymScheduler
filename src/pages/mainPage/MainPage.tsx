import Home from "../home/Home";
import { Route, Routes } from "react-router-dom";
import ExerciseCalendar from "../exerciseCalendar/ExerciseCalendar";
import Today from "../today/Today";
import About from "../about/About";

export interface ExerciseItem {
  id: number;
  date: string;
  exercises: ExerciseList[];
}

export interface ExerciseList {
  id: number;
  name: string;
  sets: number | undefined;
  reps: number | undefined;
}

const MainPage = () => {
  return (
    <div className=" h-[calc(100vh-2.75rem)] w-full flex text-white overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/calendar" element={<ExerciseCalendar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default MainPage;
