import "./AllScientists.css";
import Scientist from "./Scientist";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function AllScientists({ dataSet }) {

    if (!dataSet.length) {
        return (
            <div id="not-found">
                <h2>No scientists matched that search. Please try again with a new query.</h2>
            </div>
        )
    }

    const allScientists = dataSet.map(data => {
        return (
            <Link to={`/scientist/${data.id}`} key={data.id}>
                <Scientist 
                id={data.id}
                name={data.name}
                image={data.image}
                field={data.field}
                accomplishment={data.accomplishment}
                />
            </Link>
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
      })).isRequired
  };