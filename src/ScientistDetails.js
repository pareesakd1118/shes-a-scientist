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
        <div id="sd">
            <div id="pathway">
                <Link className="link" to="/">she's a scientist</Link>
                <p>{"〉"}</p>
                <Link className="link" to="/scientists">featured scientists</Link>
                <p>{"〉"}</p>
                <p>{scientist.name}</p>
            </div>
            <div className="thick-divider"></div>
            <div id="sci-details">
                <div id="nf-div">
                    <h2 id="name">{scientist.name},</h2>
                    <p id="field">{scientist.field}</p>
                </div>
                <div id="sd-dob-acc">
                    <p className="sd-dob"><strong>{scientist.dateOfDeath === "n/a" ? `Born ${scientist.dateOfBirth}` : `${scientist.dateOfBirth} - ${scientist.dateOfDeath} `}</strong> ⏐</p>
                    <p>{scientist.accomplishment}</p>
                </div>
                <div id="sd-image-blurb">
                    <img id="sd-prof-image" src={scientist.image} alt={scientist.name} />
                    <div>
                        <p id="sd-blurb">{scientist.blurb}
                            <Link id="wiki-link" className="learn-more" to={scientist.wikipediaLink}>Visit HER wikipedia⇾</Link>
                        </p>
                        <img id="sd-bg-image" src={scientist.backgroundImage} alt={scientist.field} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScientistDetails