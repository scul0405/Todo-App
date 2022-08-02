const Todo = require('../models/todoModel')
const catchAsync = require('../utils/catchAsync')
const ApiFeatures = require('../utils/ApiFeatures')

exports.getAllTodos = catchAsync(async (req,res,next) => {
    // Only get all todos match with login user
    // Filter, sort and paginate if query have these
    const features = new ApiFeatures(Todo.find({username: req.user._id}),req.query)
         .filter()
         .sort()
         .pagination()
    // features now is a class, data we want contain in query
    const todos = await features.query
   // console.log(todos)
    res.status(200).json({
        status: 'success',
        total: todos.length,
        data: {
            todos
        }
    })
})

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
        status: req.body.status,
        startAt: req.body.startAt,
        endAt: req.body.endAt,
        user: req.user._id
    })

    res.status(200).json({
        status: 'success',
        data: {
            todo
        }
    })
})

exports.updateATodo = catchAsync(async (req,res,next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: 'success',
    })
})

exports.deleteATodo = catchAsync(async (req,res,next) => {
    await Todo.findByIdAndDelete(req.params.id)
    
    res.status(204).json({
        status: 'success'
    })
})