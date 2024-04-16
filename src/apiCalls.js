function getAllScientists() {
    return fetch("http://localhost:3000/api/v1/womenscientists")
    .then(res => res.json())
}

function getSingleScientist(id) {
    return fetch(`http://localhost:3000/api/v1/womenscientists/${id}`)
    .then(res => res.json())
}

export { getAllScientists, getSingleScientist }