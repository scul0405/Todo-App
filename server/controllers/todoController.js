const Todo = require('../models/todoModel')
const catchAsync = require('../utils/catchAsync')

exports.getATodo  = catchAsync(async (req,res,next) => {
    const todo = await Todo.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            todo
        }
    })
})

exports.createATodo = catchAsync(async (req,res,next) => {
    const todo = await Todo.create({
        title: req.body.title,
        description: req.body.description,
        startAt: req.body.startAt,
        endAt: req.body.endAt,
        user: req.user.id
    })

    res.status(200).json({
        status: 'success',
        data: {
            todo
        }
    })
})