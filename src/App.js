import Calendar from "./components/Calendar";
import Comunity from "./components/Comunity";
import Creator from "./components/Creator";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trending from "./components/Trending";

function App() {
  return (
     <>
      <Header/>
      <Trending/>
      <Creator/>
      <Features/>
      <Calendar/>
      <Comunity/>
      <Footer/>
     </>
  );
}

export default App;
