import "./SearchBar.js"
import React, { useState } from "react"

function SearchBar({ filterByField, searchByKeyword, reset }) {
    const [search, setSearch] = useState("")

    const handleSelect = (event) => {
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
    }

    return (
        <div>
            <select onChange={handleSelect} id="mySelect">
                <option value="" selected disabled>Select a Field of Study</option>
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
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search for Scientist" />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={resetSearch}>All Scientists</button>
        </div>
    )
}

export default SearchBar 