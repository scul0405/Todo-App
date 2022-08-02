const mongoose = require('mongoose')
const express = require('express')
const {getATodo, createATodo, getAllTodos, updateATodo, deleteATodo} = require('../controllers/todoController')
const {protect} = require('../controllers/authenticationController')

const todoRouter = express.Router();

// Protect: middleware help you verify user before create a todo
todoRouter.use(protect)

todoRouter.route('/').post(createATodo).get(getAllTodos)

todoRouter.route('/:id').post(getATodo).patch(updateATodo).delete(deleteATodo)


module.exports = todoRouter;