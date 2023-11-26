import Banner from "./components/banner/Banner";
import Sidebar from "./components/sidebar/Sidebar";
import buttons from "./components/sidebar/SidebarButtons";
import MainPage from "./pages/mainPage/MainPage";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="w-auto text-center flex font-serif">
      {/* <Sidebar buttons={buttons} open={open} /> */}
      <div className="flex-column h-[95vh] w-screen">
        <Banner toggleSidebar={toggleSidebar} />
        <MainPage open={open} />
      </div>
    </div>
  );
}

export default App;
