function getAllScientists() {
    return fetch("https://shes-a-scientist-0e61c1f67e15.herokuapp.com/api/v1/womenscientists")
    .then(res => {
        if(!res.ok){
        throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientists at this time. Please try again later.`)
        } else {
        return res.json()
        }
    })
}

function getSingleScientist(id) {
    return fetch(`https://shes-a-scientist-0e61c1f67e15.herokuapp.com/api/v1/womenscientists/${id}`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve scientist at this time. Please try again later.`)
          } else {
            return res.json()
          }
    })
}

export { getAllScientists, getSingleScientist }