import "./Error.css";
import React from "react-router-dom";
import biohazard from "../../assets/biohazard.jpg"
import PropTypes from 'prop-types';

function Error({ error }) {

    return (
        <div id="error">
            <img src={biohazard} alt="biohazard symbol" />
            <h1 id="err-h1">Uh oh...</h1>
            <p id="err-message">{error}. Please try again later.</p>
        </div>
    )
}

export default Error

Error.propTypes = {
    error: PropTypes.string.isRequired,
};