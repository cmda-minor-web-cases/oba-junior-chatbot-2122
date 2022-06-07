const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'OBA junior chatbot'
    })
})

module.exports = router