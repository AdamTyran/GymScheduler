import Sidebar from "../../components/sidebar/Sidebar";
import DisplayExercise from "../../components/exerciseDisplay/DisplayExercise";
import buttons from "../../components/sidebar/SidebarButtons";
import { Route, Routes } from "react-router-dom";
import ExerciseCalendar from "../exerciseCalendar/ExerciseCalendar";

interface Props {
  open: boolean;
}

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

const MainPage = ({ open }: Props) => {
  return (
    <div className=" h-[calc(100vh-2.75rem)] w-full flex text-white overflow-y-scroll">
      {/* <Sidebar buttons={buttons} open={open} /> */}
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route path="/exercises" element={<DisplayExercise />} />
        <Route path="/calendar" element={<ExerciseCalendar />} />
      </Routes>
    </div>
  );
};

export default MainPage;
