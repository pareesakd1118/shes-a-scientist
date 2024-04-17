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
            setAllData(data.womenScientists)
            setSearchData(data.womenScientists)
            setLoading(false)
        })
    }

    useEffect(() => {
        displayAllScientists()
    }, [])

    function filterByField(field) {
        let filteredArray = allData.filter(data => data.field.toLowerCase().includes(field.toLowerCase()))
        setSearchData(filteredArray)
    }

    function searchByKeyword(keyword) {
        let filteredArray = allData.filter(data => {
           return data.name.toLowerCase().includes(keyword.toLowerCase()) || data.accomplishment.toLowerCase().includes(keyword.toLowerCase()) || data.blurb.toLowerCase().includes(keyword.toLowerCase()) 
        })
        setSearchData(filteredArray)
    }

    function reset() {
        setSearchData(allData)
    }

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div>
            <SearchBar filterByField={filterByField} searchByKeyword={searchByKeyword} reset={reset} />
            <AllScientists dataSet={searchData} />
        </div>
    )
}

export default SecondPage