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
            <div className="image-container">
                <div>
                    <div className="flex-row">
                        <h2>{featuredScientist.name},</h2>
                        <p>{featuredScientist.field}</p>
                    </div>
                    <img className="profile-image" src={featuredScientist.image} alt={featuredScientist.name} />
                </div>
                <div>
                    <img  className="background-image" src={featuredScientist.backgroundImage} alt={featuredScientist.field} />
                    <p>{featuredScientist.accomplishment}</p>
                </div>    
            </div>
            <div className="frontpage-image-div">
                <img className="frontpage-image" src="https://www.travelandleisure.com/thmb/sH4T0ElWwZFyUhtqAZD3USeiaSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/james-webb-hole-WEBB0722-a7b14258290d4da9be4c7d50ee732d9b.jpg" alt="space" />
                <img className="frontpage-image" src="https://static.scientificamerican.com/sciam/cache/file/52B19135-A87E-4900-8787C55A19925989_source.jpg?w=1200" alt="neurons" />
                <img className="frontpage-image" src="https://dtdxsaqq5q4.cloudfront.net/sites/biologicalsciences/files/styles/large/public/images/2019-04/shutterstock_433526722_single_t_cell.jpg?itok=r-vQ2ExI" alt="virus" />
                <img className="frontpage-image" src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638891996/EducationHub/photos/methicillin-resistance-staphylococcus-aureus.jpg" alt="bacteria" />
                <img className="frontpage-image" src="https://i.ytimg.com/vi/Mvf3hOpiG1Q/maxresdefault.jpg" alt="cells" />
            </div>
        </div>
    )
}

export default FirstPage