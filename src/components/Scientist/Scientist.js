import "./Scientist.css"
import PropTypes from 'prop-types';
import emptyheart from "../../assets/emptyheart.png";
import fullheart from "../../assets/fullheart.png";
import { Link } from "react-router-dom";

function Scientist({ id, name, image, field, accomplishment, toggleFavorite, isFavorited }) {

    const handleFavoriting = () => {
        toggleFavorite(id)
    }

    let nameArray = name.split(" ")
    let lastName = nameArray.slice(1).join(" ")
    let firstName = nameArray[0]
    let firstInitial = firstName.split("")[0]
    let formattedName = `${firstInitial}. ${lastName}`

    return (
        <div className="scientist" id={id}>
            <div id="sci-name-heart">
            <Link id="sci-name" to={`/scientist/${id}`} key={id}>{name.split("").length > 20 ? formattedName : name}</Link>
                <img id="heart" src={isFavorited ? fullheart : emptyheart} onClick={() => handleFavoriting(id)} alt="heart" />
            </div>
            <Link to={`/scientist/${id}`} key={id}>
                <div className="image-container">
                    <img className="grid-image" src={image} alt={`${name}`} />
                    <div className="overlay">
                        <p className="text">{accomplishment}</p>
                    </div>
                </div>
                <p className="field-text">{field}</p>
            </Link>
        </div>
    )
}

export default Scientist

Scientist.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    accomplishment: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};