import React from "react";
// import Circle from './components/Circles'
import "./App.css";
import Navbar from "./pages/Navbar";
import Features from "./pages/Features";
import Advantages from "./pages/Advantages";
import "./index.css";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
import Advertisement from "./pages/Advertisement";
import Switcher from "./components/Switcher";

function App() {

  return (
    <>
      <div className="App">
        <Switcher />
        <Navbar />
        <section className="flex justify-center" id="heroSection">
          <HeroSection />
        </section>
        <section className="flex justify-center"  id="featuresSection">
          <Features />
        </section>
        <section className="flex justify-center items-center"  id="testimonialSection">
          <div className="flex flex-col justify-center items-center">
          <Advantages />
          <Testimonials />
          </div>
        </section>
        <section className="flex justify-center"  id="Faqs">
          <Faq />
        </section>
        <Advertisement />
        <Footer />
      </div>
    </>
  );
}

export default App;
