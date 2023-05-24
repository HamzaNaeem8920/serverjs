const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.k9pq0sc.mongodb.net/ecommerce', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db