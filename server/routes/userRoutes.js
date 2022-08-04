const express = require('express')
const {getAUser, createAUser} = require('../controllers/userController')
const {logIn, verify} = require('../controllers/authenticationController')

const userRouter = express.Router();

userRouter.route('/').get(verify)
userRouter.route('/login').post(logIn)
userRouter.route('/signup').post(createAUser)

userRouter.route('/:id').get(getAUser)



module.exports = userRouter