const express = require('express')
require('dotenv').config()
const cors = require('cors')

const { dbConnection } = require('./database/config')

// Create server of express
const app = express()

// Config CORS
app.use(cors())

// Database
dbConnection()

// Rutes
app.get('/', (req, res) => {
    res.json({
        ok: true,
        mgs: 'Hola Mundo'
    })
})

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
})