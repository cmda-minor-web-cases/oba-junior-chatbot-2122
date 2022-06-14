const getData = (query) => {
    const endpoint = `https://zoeken.oba.nl/api/v1/search/?q=prentenboeken%20${query}&authorization=${process.env.PUB_KEY}&refine=true&output=json`

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
    })
}

export {
    getData
}