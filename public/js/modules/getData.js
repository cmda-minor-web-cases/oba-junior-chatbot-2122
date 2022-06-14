import { render } from './render.js'

const getData = (query) => {
    const endpoint = `https://zoeken.oba.nl/api/v1/search/?q=${query}&authorization=fff5cd7a65bd87deefd8f70bfb447d42&refine=true&output=json`

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        render(data.results)
    })
}

export {
    getData
}