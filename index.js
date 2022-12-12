require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { dbConnection } = require('./database/config')

// Create server of express
const app = express()

// Config CORS
app.use(cors())

// Lectura del body
app.use(express.json())

// Database
dbConnection()

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
})