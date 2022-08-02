const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/userModel')
const signToken = require('../utils/signToken')
const jwt = require('jsonwebtoken')
const {promisify} = require('util')


exports.logIn = catchAsync(async (req,res,next) => {
    // Check user input doesn't enough information
    if (!req.body.username || !req.body.password)
        return next(new AppError(404,'Please provide username and password'));
    // Check is exist username
    const user = await User.findOne({username: req.body.username}).select('+password')
    if (!user)
        return next(new AppError(404,'User not found, please check your username again !'))
    // Check password is correct
    if (!await user.isCorrectPassword(req.body.password,user.password))
        return next(new AppError(400,'Your password is wrong, please check again !'))
    // All is ok -> get token
    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    })
})

exports.protect = catchAsync(async (req,res,next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1];
    if (!token)
        return next(new AppError(401,'You are not logged in !'))
    
    //console.log(token);
    // Verify token
    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    // get user and check is exist
    const user = await User.findById(decoded.id);
    if (!user)
        return next(new AppError(401,`The user belong to this token does no longer exist`))
    
    // Send user to next action
    req.user = user;
    next();
        
})