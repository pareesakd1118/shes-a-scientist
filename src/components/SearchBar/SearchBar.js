import "./SearchBar.css"
import React, { useState } from "react"
import logo from "../../assets/logo.svg"
import PropTypes from 'prop-types';

function SearchBar({ filterByField, searchByKeyword, reset }) {
    const [search, setSearch] = useState("")
    const [field, setField] = useState("")

    const handleSelect = (event) => {
        setField(event.target.value)
        filterByField(event.target.value)
        setSearch("")
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        searchByKeyword(event.target.value, field)
    }

    const resetSearch = (event) => {
        setSearch("")
        event.preventDefault()
        reset()
        setField("")
    }

    return (
        <div id="sb-div">
            <div className="search-bar">
                <select value={field} onChange={handleSelect} id="mySelect">
                    <option value="" selected disabled>Select field of study</option>
                    <option value="astronautics">Astronautics</option>
                    <option value="astronomy">Astronomy</option>
                    <option value="biology">Biology</option>
                    <option value="biochemistry">Biochemistry</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="computer">Computer Science</option>
                    <option value="genetics">Genetics</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="neuroscience">Neuroscience</option>
                    <option value="pharmacology">Pharmacology</option>
                    <option value="physics">Physics</option>
                    <option value="primatology">Primatology</option>
                    <option value="virology">Virology</option>
                </select>
                <div className="vertical-divider"></div>
                <div id="search-div">
                    <img id="magnifyglass" src={logo} alt="magnifying glass" />
                    <input type="text" value={search} onChange={handleChange} placeholder="Type to search" />
                </div>
                <div className="vertical-divider"></div>
                <button className="reset-btn" onClick={resetSearch} >All scientists</button>
            </div>
            <div className="thick-divider"></div>
        </div>
    )
}

export default SearchBar 

SearchBar.propTypes = {
    filterByField: PropTypes.func.isRequired,
    searchByKeyword: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}