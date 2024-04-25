import "./Favorites.css";
import Scientist from "../Scientist/Scientist";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { getAllScientists } from "../../apiCalls";
import LoadingPage from "../LoadingPage/LoadingPage";
import React, {useState, useEffect} from "react";
import Error from "../Error/Error";

function Favorites() {
    const [allData, setAllData] = useState([])
    const [favoriteScientists, setFavoriteScientists] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function displayFavoriteScientists() {
        getAllScientists()
        .then(data => {
            setAllData(data.womenScientists)
            setLoading(false)
        })
        .catch(error => setError(error.message))
    }

    useEffect(() => {
        displayFavoriteScientists()
    }, [])

    function favoriteScientist(id) {
        let favorite = allData.find(data => parseInt(data.id) === parseInt(id))
        setFavoriteScientists([...favoriteScientists, favorite])
    }

    function unfavoriteScientist(id) {
        let filter = allData.filter(data => parseInt(data.id) !== parseInt(id))
        setFavoriteScientists(filter)
    }

    if (error) {
        return <Error error={error} />
    }
    
    if (loading) {
        return <LoadingPage />
    }
    
    if (!favoriteScientists.length) {
        return (
            <div id="not-found">
                <h2>You don't have any favorite scientists yet!</h2>
                <Link className="ms-link" to="/scientists">Select favorites now</Link>
            </div>
        )
    }


    const favorites = favoriteScientists.map(data => {
        return (
                <Scientist 
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    image={data.image}
                    field={data.field}
                    accomplishment={data.accomplishment}
                />
        )
    })

    return (
        <div className="scientist-container">
            {favorites}
        </div>
    )
}

export default Favorites

Favorites.propTypes = {
    dataSet: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        accomplishment: PropTypes.string.isRequired,
      })).isRequired
};