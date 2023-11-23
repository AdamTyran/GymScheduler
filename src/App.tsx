import Banner from "./components/banner/Banner";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="w-auto h-[95vh] text-center flex-col font-serif">
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
