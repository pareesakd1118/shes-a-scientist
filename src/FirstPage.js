import "./FirstPage.css";
import React, { useEffect, useState } from "react";
import { getAllScientists } from "./apiCalls"
import LoadingPage from "./LoadingPage"

function FirstPage() {
    const [featuredScientist, setFeaturedScientist] = useState({})
    const [loading, setLoading] = useState(true)

    function getFeaturedScientist() {
        getAllScientists()
        .then(data => {
            let number = Math.floor(Math.random() * data.womenScientists.length)
            setFeaturedScientist(data.womenScientists[number])
            setLoading(false)
        })
    }

    useEffect(() => {
        getFeaturedScientist()
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div>
            <h2>{featuredScientist.name}</h2>
            <p>{featuredScientist.field}</p>
            <p>{featuredScientist.accomplishment}</p>
            <img src={featuredScientist.image} alt={`image of ${featuredScientist.name}`} />
            <img src={featuredScientist.backgroundImage} alt={`image of ${featuredScientist.field}`} />
        </div>
    )
}

export default FirstPage