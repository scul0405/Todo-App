const mongoose = require('mongoose')
const User = require('./userModel')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [0, 'A title can not be blank'],
        require: true
    },
    description: String,
    status: {
        type: String,
        enum: ['TODO','DOING','DONE'],
        require: true,
    },
    startAt: {
        type: Date,
        default: Date.now
    },
    endAt: Date,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;