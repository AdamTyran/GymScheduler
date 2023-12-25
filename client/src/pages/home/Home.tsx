import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full items-center justify-center gap-10">
      <Link to="/today">
        <div className="h-56 w-56 md:h-96 md:w-96 bg-gradient-to-b from-gray-700 to-gray-400 flex items-center justify-center">
          <div className="font-bold text-5xl shadow-2xl">Today</div>
        </div>
      </Link>
      <Link to="/calendar">
        <div className="h-56 w-56 md:h-96 md:w-96 bg-gradient-to-b from-indigo-700 to-indigo-300 flex items-center justify-center">
          <div className="font-bold text-5xl shadow-2xl">Calendar</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
