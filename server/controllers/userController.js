const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')

exports.getAUser  = catchAsync(async (req,res,next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})

exports.createAUser = catchAsync(async (req,res,next) => {
    const user = await User.create({
        userName : req.body.userName,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    console.log(user)
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})