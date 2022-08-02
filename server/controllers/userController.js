const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const signToken = require('../utils/signToken')


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
        username : req.body.username,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })

    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token,
        data: {
            user
        }
    })
})
