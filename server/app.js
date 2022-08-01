const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express();
const userRouter = require('./routes/userRoutes')
const todoRouter = require('./routes/todoRoutes')
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// set environment
if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

// middleware
app.use(express.json())


// Set default route
app.use('/api/users',userRouter)
app.use('/api/todos', todoRouter)


// Handle when go to undefined route
app.all('*',(req,res,next) => {
   next(new AppError(404,`Can't find ${req.originalUrl} on this server !`))
})

// Handle global error
app.use(globalErrorHandler);

module.exports = app