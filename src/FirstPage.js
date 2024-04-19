import "./FirstPage.css";
import React, { useEffect, useState } from "react";
import { getAllScientists } from "./apiCalls";
import LoadingPage from "./LoadingPage";
import { Link } from "react-router-dom";
import FirstPageImage from "./FirstPageImage";
import imagesData from "./firstPageImages";
import Error from "./Error";

function FirstPage() {
    const [featuredScientist, setFeaturedScientist] = useState({})
    const [loading, setLoading] = useState(true)
    const [fpImages, setFpImages] = useState(imagesData)
    const [error, setError] = useState(null)

    function getFeaturedScientist() {
        getAllScientists()
        .then(data => {
            let number = Math.floor(Math.random() * data.womenScientists.length)
            setFeaturedScientist(data.womenScientists[number])
            setLoading(false)
        })
        .catch(error => setError(error.message))
    }

    const firstPageImages = fpImages.map(item => {
        return (
            <FirstPageImage 
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                source={item.source}
                date={item.date}
                wikilink={item.wikilink}
            />
        )
    })

    useEffect(() => {
        getFeaturedScientist()
    }, [])

    if (error) {
        return <Error error={error} />
    }

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div className="fp">
            <div id="top-bar">
                <Link id="mission-link" to="/mission"><strong>Our mission⇾</strong></Link>
            </div>
            <div className="thick-divider margin-top"></div>
            <div className="image-container">
                    <div className="fp-name-div">
                        <img className="profile-image" src={featuredScientist.image} alt={featuredScientist.name} />
                        <Link to={`/scientist/${featuredScientist.id}`}>
                        <h2 className="fp-name">{featuredScientist.name}</h2>
                        </Link>
                        <p className="fp-dob">{featuredScientist.dateOfDeath === "n/a" ? `Born ${featuredScientist.dateOfBirth}` : `${featuredScientist.dateOfBirth} - ${featuredScientist.dateOfDeath}`}</p>
                    </div>
                <div className="bg-div">
                    <img  className="background-image" src={featuredScientist.backgroundImage} alt={featuredScientist.field} />
                    <p className="fp-accomp"><i><strong>{featuredScientist.field}</strong></i> {featuredScientist.accomplishment} <Link className="learn-more" to={`/scientist/${featuredScientist.id}`}>Read about HER⇾</Link></p>
                </div>    
            </div>
            <div className="frontpage-image-div">
                {firstPageImages}
            </div>
        </div>
    )
}

export default FirstPage