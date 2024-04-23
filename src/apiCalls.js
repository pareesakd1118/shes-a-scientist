function getAllScientists() {
    return fetch("https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists")
    .then(res => {
        if(!res.ok){
        throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientists at this time. Please try again later.`)
        } else {
        return res.json()
        }
    })
}

function getSingleScientist(id) {
    return fetch(`https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists/${id}`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientist at this time. Please try again later.`)
          } else {
            return res.json()
          }
    })
}

export { getAllScientists, getSingleScientist }