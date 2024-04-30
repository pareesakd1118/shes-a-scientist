import "./AllScientists.css";
import Scientist from "../Scientist/Scientist";
import PropTypes from 'prop-types';

function AllScientists({ dataSet, toggleFavorite, favoriteScientists }) {
    const favoritedScientistIds = favoriteScientists.map(scientist => scientist.id)

    if (!dataSet.length) {
        return (
            <div id="not-found">
                <h2>No scientists match your search. Please try again with a new query.</h2>
            </div>
        )
    }

    const allScientists = dataSet.map(data => {
        return (
                <Scientist 
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    image={data.image}
                    field={data.field}
                    accomplishment={data.accomplishment}
                    toggleFavorite={toggleFavorite}
                    isFavorited={favoritedScientistIds.includes(data.id)}
                />
        )
    })

    return (
        <div className="scientist-container">
            {allScientists}
        </div>
    )
}

export default AllScientists

AllScientists.propTypes = {
    dataSet: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        accomplishment: PropTypes.string.isRequired,
        toggleFavorite: PropTypes.func.isRequired,
        isFavorited: PropTypes.bool.isRequired,
      })).isRequired
};