require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 1234
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

const indexRoute = require('./routers/indexRoute')
const detailRoute = require('./routers/detailRoute')

app.use('/', indexRoute)
app.use('/', detailRoute)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})