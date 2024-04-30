import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from "../Nav/Nav";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ScientistDetails from "../ScientistDetails/ScientistDetails";
import Favorites from "../Favorites/Favorites";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import MissionStatement from "../MissionStatement/MissionStatement";
import { Routes, Route } from 'react-router-dom';
import { getAllScientists } from "../../apiCalls";
import LoadingPage from "../LoadingPage/LoadingPage";
import Error from "../Error/Error";

function App() {
  const [allData, setAllData] = useState([])
  const [favoriteScientists, setFavoriteScientists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function getAllData() {
      getAllScientists()
      .then(data => {
          setAllData(data.womenScientists)
          setLoading(false)
      })
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    getAllData()
  }, [])

  useEffect(() => {
    const data = window.localStorage.getItem("FAV_SCIENTISTS")
    if (data) {
      setFavoriteScientists(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("FAV_SCIENTISTS", JSON.stringify(favoriteScientists));
  }, [favoriteScientists]);

  function favoriteScientist(id) {
    let favorite = allData.find(data => parseInt(data.id) === parseInt(id));
    setFavoriteScientists(prevFavoriteScientists => [...prevFavoriteScientists, favorite]);
  }

  function unfavoriteScientist(id) {
    setFavoriteScientists(prevFavoriteScientists => prevFavoriteScientists.filter(data => parseInt(data.id) !== parseInt(id)));
  }

  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
    <Nav />
    <Routes >
      <Route path="/" element={<FirstPage />} />
      <Route path="/scientists" element={<SecondPage favoriteScientists={favoriteScientists} favoriteScientist={favoriteScientist} unfavoriteScientist={unfavoriteScientist}/>} />
      <Route path="/scientist/:id" element={<ScientistDetails />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/mission" element={<MissionStatement />} />
      <Route path="/favorites" element={<Favorites dataSet={favoriteScientists} favoriteScientist={favoriteScientist} unfavoriteScientist={unfavoriteScientist}/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
