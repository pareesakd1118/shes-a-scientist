import "./Error.css";
import React from "react-router-dom";
import biohazard from "../src/assets/biohazard.jpg"

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