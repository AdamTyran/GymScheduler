import Banner from "./components/banner/Banner";
import MainPage from "./components/mainPage/MainPage";
import Footer from "./components/footer/Footer";

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
