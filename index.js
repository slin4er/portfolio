require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler')
const pages = require('./routes/pages')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('./public'))

//Routes
app.use(pages)

//Wrong Route
app.get('*', (req, res) => {
    throw new Error('Route does not exist')
})

//Middlewares
app.use(errorHandler)

//Server
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})