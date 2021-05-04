const express = require('express')
const webRoutes = require('./routes/web.js')
const app = express()
const pug = require('pug')
const path = require('path')
require('dotenv').config()
const port = process.env.port || 3000

app.use(express.static('client/public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))

app.use(webRoutes)
app.listen(port, () => {
    console.log('Server is running on http://www.localhost:3000 if bladi wants to stop he can press clear ' + process.env.DB_USERNAME)
})


/** */
