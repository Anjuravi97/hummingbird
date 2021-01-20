import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Team from "./components/Team";




function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Services />
      <Aboutus />
      <Team />
      <Footer />
    </>
  );
}

export default App;
