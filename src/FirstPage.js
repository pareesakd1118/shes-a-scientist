import "./FirstPage.css";
import React, { useEffect, useState } from "react";
import { getAllScientists } from "./apiCalls";
import LoadingPage from "./LoadingPage";
import { Link } from "react-router-dom";
import FirstPageImage from "./FirstPageImage";
import imagesData from "./firstPageImages";

function FirstPage() {
    const [featuredScientist, setFeaturedScientist] = useState({})
    const [loading, setLoading] = useState(true)
    const [fpImages, setFpImages] = useState(imagesData)

    function getFeaturedScientist() {
        getAllScientists()
        .then(data => {
            let number = Math.floor(Math.random() * data.womenScientists.length)
            setFeaturedScientist(data.womenScientists[number])
            setLoading(false)
        })
    }

    const firstPageImages = fpImages.map(item => {
        return (
            <FirstPageImage 
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                source={item.source}
                date={item.date}
            />
        )
    })

    useEffect(() => {
        getFeaturedScientist()
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div className="fp">
            <div className="image-container">
                <div>
                    <div className="fp-name-div">
                        <Link to={`/scientist/${featuredScientist.id}`}>
                        <h2 className="fp-name">{featuredScientist.name}</h2>
                        </Link>
                    </div>
                    <img className="profile-image" src={featuredScientist.image} alt={featuredScientist.name} />
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