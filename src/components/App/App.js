import './App.css';
import React from 'react';
import Nav from "../Nav/Nav";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ScientistDetails from "../ScientistDetails/ScientistDetails";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import MissionStatement from "../MissionStatement/MissionStatement";
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
    <Nav />
    <Routes >
      <Route path="/" element={<FirstPage />} />
      <Route path="/scientists" element={<SecondPage />} />
      <Route path="/scientist/:id" element={<ScientistDetails />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/mission" element={<MissionStatement />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
