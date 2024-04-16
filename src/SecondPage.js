import "./SecondPage.css";
import AllScientists from "./AllScientists";
import SearchBar from "./SearchBar";
import { getAllScientists } from "./apiCalls";
import LoadingPage from "./LoadingPage";
import React, {useState, useEffect} from "react";

function SecondPage() {
    const [allData, setAllData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [loading, setLoading] = useState(true)

    function displayAllScientists() {
        getAllScientists()
        .then(data => {
            console.log(data.womenScientists)
            setAllData(data.womenScientists)
            setLoading(false)
            console.log("all", allData)
            console.log("search", searchData)
        })
    }

    useEffect(() => {
        displayAllScientists()
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div>
            <SearchBar />
            <AllScientists dataSet={allData}/>
        </div>
    )
}

export default SecondPage