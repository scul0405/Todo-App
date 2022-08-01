const express = require('express')
const {getAUser, createAUser} = require('../controllers/userController')

const userRouter = express.Router();

userRouter.route('/').post(createAUser)

userRouter.route('/:id').get(getAUser)



module.exports = userRouter