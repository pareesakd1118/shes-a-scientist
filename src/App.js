import './App.css';
import React, { useEffect } from 'react';
import Nav from "./Nav"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ScientistDetails from "./ScientistDetails"
import Footer from "./Footer"
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Nav />
    <Routes >
      <Route path="/" element={<FirstPage />} />
      <Route path="/scientists" element={<SecondPage />} />
      <Route path="/scientist/:id" element={<ScientistDetails />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
