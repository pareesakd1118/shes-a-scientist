import "./ScientistDetails.css";
import { Link, useParams } from "react-router-dom";
import { getSingleScientist } from "./apiCalls";
import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

function ScientistDetails() {
    const { id } = useParams();
    const [scientist, setScientist] = useState({})
    const [loading, setLoading] = useState(true)

    function displayScientist() {
        getSingleScientist(id)
        .then(data => {
            setLoading(false)
            setScientist(data)})
    }

    useEffect(() => {
        displayScientist()
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div>
            <div id="pathway">
                <Link className="link" to="/">she's a scientist</Link>
                <p>{"〉"}</p>
                <Link className="link" to="/scientists">featured scientists</Link>
                <p>{"〉"}</p>
                <p>{scientist.name}</p>
            </div>
            <div className="thick-divider"></div>
            <div id="sci-details">
                <h2>{scientist.name}</h2>
                <p>{scientist.field}</p>
                <p>{scientist.accomplishment}</p>
                <p>{scientist.blurb}</p>
                <img src={scientist.image} alt={scientist.name} />
                <img src={scientist.backgroundImage} alt={scientist.field} />
                <Link>
                    <button to={scientist.wikipediaLink}>Visit {scientist.name}'s wikipedia</button>
                </Link>
            </div>
        </div>
    )
}

export default ScientistDetails