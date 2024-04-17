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
    )
}

export default ScientistDetails