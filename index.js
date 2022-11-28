const express = require('express')
const { dbConnection } = require('./database/config')

const app = express()

dbConnection()

app.get('/', (req, res) => {
    res.json({
        ok: true,
        mgs: 'Hola Mundo'
    })
})

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto ' + 3000)
})