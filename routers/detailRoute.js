const express = require('express')
const router = express.Router()
const axios = require('axios').default

router.get('/boek/:id', async (req, res) => {
    const { id } = req.params
    const endpoint = `https://zoeken.oba.nl/api/v1/search/?id=${id}&authorization=${process.env.PUB_KEY}&refine=true&output=json`

    await axios({
        method: "GET",
        url: endpoint
    })
    .then(response => {
        const book = response.data.results[0]
        res.render('pages/detail', {
            title: book.titles[0],
            book
        })
    })
})

module.exports = router