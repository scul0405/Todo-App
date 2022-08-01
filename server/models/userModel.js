const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true,'Please provide your user name'],
        minLength: [4,'User name length must greater or equal than 4!']
    },
    password: {
        type: String,
        require: [true, 'Please provide your password'],
        minLength: [4,'Password length must greater or equal than 4!']
    },
    passwordConfirm: {
        type: String,
        selected: false,
        require: [true,'Please provide your password confirm'],
        validate: {
            validator: function(pwConfirm){
                return this.password === pwConfirm;
            }
        }
    },
    active: {
        type: Boolean,
        default: true,
        selected: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;