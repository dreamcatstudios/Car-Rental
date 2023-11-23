import Banner from "./components/Banner";
import Bookform from "./components/BookForm";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Pickcontainer from "./components/Pickcontainer";
import Planselection from "./components/Planselection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bookform />
      <Planselection />
      <Pickcontainer />
      <Banner />
    </>
  );
}

export default App;
