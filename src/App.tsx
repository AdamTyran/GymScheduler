import Banner from "./components/banner/Banner";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-auto h-[95vh] text-center flex-col font-serif">
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
