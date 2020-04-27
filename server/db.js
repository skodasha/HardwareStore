const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Userr:0fssOcDXuL8yFpYk@thing-wiehy.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected db successful'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db