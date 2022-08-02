const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/userModel')
const signToken = require('../utils/signToken')


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