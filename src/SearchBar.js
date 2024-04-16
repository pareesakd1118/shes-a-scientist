import "./SearchBar.js"
import React, { useState } from "react"

function SearchBar() {
    const [field, setField] = useState("")
    console.log("field", field)

    return (
        <select value={field} onChange={event => setField(event.target.value)}id="mySelect">
            <option value="" disabled selected>Select a Field of Study</option>
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
    )
}

export default SearchBar