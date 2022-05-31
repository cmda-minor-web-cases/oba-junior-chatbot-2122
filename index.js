require('dotenv').config()
const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 1234
const path = require('path')

const app = express()
const server = http.createServer(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static(__dirname + '/public'))