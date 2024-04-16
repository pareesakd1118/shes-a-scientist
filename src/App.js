import './App.css';
import React, { useEffect } from 'react';
import Nav from "./Nav"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ScientistDetails from "./ScientistDetails"
import Footer from "./Footer"

function App() {

  return (
    <>
    <Nav />
    <FirstPage />
    <SecondPage />
    <ScientistDetails />
    <Footer />
    </>
  );
}

export default App;
