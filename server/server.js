const express = require('express')
const webRoutes = require('./routes/web.js')
const app = express()
const pug = require('pug')
const path = require('path')

app.use(express.static('client/public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))

app.use(webRoutes)
app.listen(3000, () => {
    console.log('Server is running on http://www.localhost:3000 if bladi wants to stop he can press clear ' )
})