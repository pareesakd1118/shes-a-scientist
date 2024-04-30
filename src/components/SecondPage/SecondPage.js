import "./SecondPage.css";
import AllScientists from "../AllScientists/AllScientists";
import SearchBar from "../SearchBar/SearchBar";
import { getAllScientists } from "../../apiCalls";
import LoadingPage from "../LoadingPage/LoadingPage";
import React, {useState, useEffect} from "react";
import Error from "../Error/Error";

function SecondPage({ toggleFavorite, favoriteScientists }) {
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

    function searchByKeyword(keyword, field) {
        if (!field) {
            let filteredArray = allData.filter(data => {
                return data.name.toLowerCase().includes(keyword.toLowerCase()) || data.accomplishment.toLowerCase().includes(keyword.toLowerCase()) || data.blurb.toLowerCase().includes(keyword.toLowerCase()) 
            })
            setSearchData(filteredArray)
        } else {
            let fieldArray = allData.filter(data => data.field.toLowerCase().includes(field.toLowerCase()))
            let filteredArray = fieldArray.filter(data => {
                return data.name.toLowerCase().includes(keyword.toLowerCase()) || data.accomplishment.toLowerCase().includes(keyword.toLowerCase()) || data.blurb.toLowerCase().includes(keyword.toLowerCase()) 
                })
            setSearchData(filteredArray)
        }
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
            <AllScientists favoriteScientists={favoriteScientists} dataSet={searchData} toggleFavorite={toggleFavorite}/>
        </div>
    )
}

export default SecondPage