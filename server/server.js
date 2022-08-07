const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const app = require('./app')
const mongoose = require('mongoose')


const DB_URI = process.env.MONGODB_URI.replace('<password>',process.env.MONGODB_PASSWORD);
mongoose.connect(DB_URI,{
    useNewUrlParser: true
}).then(() => {
    console.log('Connect to database successful !')
}).catch(error => throw new Error(error.message))

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App running on port ${port} ...`)
})