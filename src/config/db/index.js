const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/METAN_dev')
        console.log('Connect Successfully')
    } catch (error) {
        console.log('Connect Failed')
    }
}

module.exports = { connect }
