import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import './index.css';
function App() {
  
  return(
    <>
      <Header />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
