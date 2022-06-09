const express = require('express')
const router = express.Router()
const axios = require('axios').default

const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=prentenboeken"

const spannend = `${endpoint}%20spannend&authorization=${process.env.PUB_KEY}&refine=true&output=json`
const monsters = `${endpoint}%20monsters&authorization=${process.env.PUB_KEY}&refine=true&output=json`
const prinsessen = `${endpoint}%20prinsessen&authorization=${process.env.PUB_KEY}&refine=true&output=json`

const reqOne = axios.get(spannend)
const reqTwo = axios.get(monsters)
const reqThree = axios.get(prinsessen)

router.get('/', async (req, res, next) => {
    axios
    .all([reqOne, reqTwo, reqThree])
    .then(
        axios.spread((...responses) => {

            const spannend = responses[0].data.results
            const monsters = responses[1].data.results
            const prinsessen = responses[2].data.results

            res.render('pages/index', {
                title: 'OBA chatbot',
                spannend,
                monsters,
                prinsessen
            })
        })
    )
})

module.exports = router