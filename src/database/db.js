
const mongoose = require('mongoose')

function connect() {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)

    mongoose.connect(process.env.MONGODB_URL)  //process.env.MONGODB_URL ||  mongodb+srv://trequinhos:nos141212@cluster0.2ryrv.mongodb.net/Cluster0?retryWrites=true&w=majority -- mongodb://localhost:27017/api-trequinhos?readPreference=primary&appname=MongoDB%20Compass&ssl=false

    const db = mongoose.connection

    db.once('open',() => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}