function getAllScientists() {
    return fetch("http://localhost:3000/api/v1/womenscientists")
    .then(res => {
        if(!res.ok){
        throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientists at this time. Please try again later.`)
        } else {
        return res.json()
        }
    })
}

function getSingleScientist(id) {
    return fetch(`http://localhost:3000/api/v1/womenscientists/${id}`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientist at this time. Please try again later.`)
          } else {
            return res.json()
          }
    })
}

export { getAllScientists, getSingleScientist }