import "./SearchBar.css"
import React, { useState } from "react"
import logo from "./logo.svg"

function SearchBar({ filterByField, searchByKeyword, reset }) {
    const [search, setSearch] = useState("")
    const [field, setField] = useState("")

    const handleSelect = (event) => {
        setField(event.target.value)
        filterByField(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        searchByKeyword(search)
    }

    const resetSearch = (event) => {
        setSearch("")
        event.preventDefault()
        reset()
        setField("")
    }

    return (
        <>
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
                <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search for scientist" />
                <img id="magnifyglass" src={logo} alt="magnifying glass" onClick={handleSubmit} />
                <div className="vertical-divider"></div>
                <button className="reset-btn" onClick={resetSearch} >All scientists</button>
            </div>
            <div className="thick-divider"></div>
        </>
    )
}

export default SearchBar 