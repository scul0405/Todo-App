const express = require('express')
const {getAUser, createAUser} = require('../controllers/userController')
const {logIn} = require('../controllers/authenticationController')

const userRouter = express.Router();

userRouter.route('/login').post(logIn)
userRouter.route('/').post(createAUser)

userRouter.route('/:id').get(getAUser)



module.exports = userRouter