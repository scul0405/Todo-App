const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express();

if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

app.use(express.json())
const DB_URI = process.env.MONGODB_URI.replace('password',process.env.MONGODB_PASSWORD);
mongoose.connect(DB_URI,{
    useFindAndModify: true
}).then(() => {
    console.log('Connect to database successful !')
})

module.exports = app