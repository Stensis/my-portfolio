import React from "react";
// import '../src/stylingCss/App.css'
import About from "./components/About";
import BottomNav from "./components/BottomNav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <BottomNav />
      <Home />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
