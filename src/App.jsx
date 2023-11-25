import Banner from "./components/Banner";
import Bookform from "./components/BookForm";
import Chooseus from "./components/Chooseus";
import Downlaod from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Pickcontainer from "./components/Pickcontainer";
import Planselection from "./components/Planselection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bookform />
      <Planselection />
      <Pickcontainer />
      <Banner />
      <Chooseus />
      <Testimonials />
      <Faq />
      <Downlaod />
      <Footer />
    </>
  );
}

export default App;
