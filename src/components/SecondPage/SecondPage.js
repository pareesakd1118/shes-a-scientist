import "./SecondPage.css";
import AllScientists from "../AllScientists/AllScientists";
import SearchBar from "../SearchBar/SearchBar";
import { getAllScientists } from "../../apiCalls";
import LoadingPage from "../LoadingPage/LoadingPage";
import React, {useState, useEffect} from "react";
import Error from "../Error/Error";

function SecondPage() {
    const [allData, setAllData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function displayAllScientists() {
        getAllScientists()
        .then(data => {
            setAllData(data.womenScientists)
            setSearchData(data.womenScientists)
            setLoading(false)
        })
        .catch(error => setError(error.message))
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

    if (error) {
        return <Error error={error} />
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