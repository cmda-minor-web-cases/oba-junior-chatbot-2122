import { render } from './render.js'

const getData = (query) => { // function that gets data from the API. Parameter is the search query
    const endpoint = `https://zoeken.oba.nl/api/v1/search/?q=prentenboeken%20${query}&authorization=fff5cd7a65bd87deefd8f70bfb447d42&refine=true&output=json`

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        render(data.results) // call function that renders the data
    })
}

export {
    getData
}