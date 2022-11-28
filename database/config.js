const mongoose = require('mongoose')

const dbConnection = async() => {

    try {
        await mongoose.connect('mongodb+srv:<username>//:<password>.mongodb.net/hospitaldb', {
        });

        console.log('Db Online')
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la BD ver logs')
    }

}

module.exports = {
    dbConnection
}
