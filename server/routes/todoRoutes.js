const mongoose = require('mongoose')
const express = require('express')
const {getATodo, createATodo} = require('../controllers/todoController')

const todoRouter = express.Router();

todoRouter.route('/').post(createATodo)


module.exports = todoRouter;