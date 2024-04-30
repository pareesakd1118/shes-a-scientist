import "./Favorites.css";
import Scientist from "../Scientist/Scientist";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import React from "react";


function Favorites({ dataSet, unfavoriteScientist, favoriteScientist }) {
  
    if (!dataSet.length) {
        return (
            <div id="not-found">
                <h2>You don't have any favorite scientists yet!</h2>
                <Link className="ms-link" to="/scientists">Select favorites now</Link>
            </div>
        )
    }

    const favorites = dataSet.map(data => {
        return (
                <Scientist 
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    image={data.image}
                    field={data.field}
                    accomplishment={data.accomplishment}
                    unfavoriteScientist={unfavoriteScientist} 
                    favoriteScientist={favoriteScientist}
                    isFavorited={true}
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