import Sidebar from "../../components/sidebar/Sidebar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/sidebar/SidebarButtons";
import { Route, Routes } from "react-router-dom";
// import AddExerciseDay from "../addExerciseDay/AddExerciseDay";
import ExerciseCalendar from "../exerciseCalendar/ExerciseCalendar";

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
    <div className="bg-gray-900 min-h-full flex text-white">
      {/* <Sidebar buttons={buttons} /> */}
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route path="/calendar" element={<ExerciseCalendar />} />
      </Routes>
    </div>
  );
};

export default MainPage;
