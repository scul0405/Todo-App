const AppError = require('../utils/appError')

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack
    })
}

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        })
    }
    else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong !',
            error: err
        })
    }
}


module.exports = (err, req,res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if (process.env.NODE_ENV === 'production'){
        if (err.name === 'CastError')
            err = new AppError(400,`Invalid ${err.path}: ${err.value}`);
        if (err.code === 11000)
            err = new AppError(400,`Duplicate field value`)
        if (err.message.startsWith('User validation failed: passwordConfirm'))
            err = new AppError(400, 'Wrong password confirm !')
        sendErrorProd(err,res);
    }
    else if (process.env.NODE_ENV === 'development')
        sendErrorDev(err,res);
    
    next();
}