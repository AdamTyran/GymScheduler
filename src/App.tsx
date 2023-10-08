import Banner from "./Components/banner/Banner";
import MainPage from "./Components/mainPage/MainPage";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="w-screen h-full text-center flex-col font-serif">
      <Banner />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
