import Banner from "./components/banner/Banner";
import Sidebar from "./components/sidebar/Sidebar";
import buttons from "./components/sidebar/SidebarButtons";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="w-auto text-center flex font-serif">
      <Sidebar buttons={buttons} />
      <div className="flex-column h-[95vh] w-screen">
        <Banner />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
