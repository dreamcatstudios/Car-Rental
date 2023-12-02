import Banner from "./components/Banner";
import Chooseus from "./components/Chooseus";
import Downlaod from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pickcontainer from "./components/Pickcontainer";
import Planselection from "./components/Planselection";
import Testimonials from "./components/Testimonials";
import "./App.css";
import Modal from "./components/Modal";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div>
      <Modal />
      <Navbar />
      <Hero />
      <BookForm />
      <Planselection />
      <Pickcontainer />
      <Banner />
      <Chooseus />
      <Testimonials />
      <Faq />
      <Downlaod />
      <Footer />
    </div>
  );
}

export default App;
