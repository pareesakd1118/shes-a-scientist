import './App.css';
import React, { useEffect } from 'react';
import Nav from "./Nav"
import FirstPage from "./FirstPage"
import AllScientists from "./AllScientists"
import ScientistDetails from "./ScientistDetails"
import Footer from "./Footer"

function App() {
  function getData() {
    return fetch("http://localhost:3000/api/v1/womenscientists")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Nav />
    <FirstPage />
    <AllScientists />
    <ScientistDetails />
    <Footer />
    </>
  );
}

export default App;
