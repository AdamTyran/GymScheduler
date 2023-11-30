import Banner from "./components/banner/Banner";
import Sidebar from "./components/sidebar/Sidebar";
import buttons from "./components/sidebar/SidebarButtons";
import MainPage from "./pages/mainPage/MainPage";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="h-screen w-screen bg-gray-900">
      <div className="h-full flex flex-col">
        <Banner toggleSidebar={toggleSidebar} />
        <div className="flex flex-row">
          <Sidebar buttons={buttons} open={open} />
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
