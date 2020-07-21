
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://factorio:seguel@cluster0-y5uyb.mongodb.net/factorio?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db