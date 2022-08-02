const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Please provide your username'],
        minLength: [4,'User name length must greater or equal than 4!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minLength: [4,'Password length must greater or equal than 4!']
    },
    passwordConfirm: {
        type: String,
        selected: false,
        required: [true,'Please provide your password confirm'],
        validate: {
            validator: function(pwConfirm){
                return this.password === pwConfirm;
            }
        }
    },
    passwordChangedAt: Date // using to compare with JWT Time Stamp
    ,
    active: { // set to false when delete user
        type: Boolean,
        default: true,
        selected: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

// Filter only user active 
userSchema.pre(/^find/,function(next){
    this.find({active: {$ne: false}});
    next();
})

// Hashing password before save
userSchema.pre('save', async function(next){
    // If user not modify password -> don't need to hash password again
    if (!this.isModified('password'))
        next();
    this.password = await bcrypt.hash(this.password,12);
    // Hashed -> set passwordConfirm to undefined;
    this.passwordConfirm = undefined;
    next();
})

// Check password when login
userSchema.methods.isCorrectPassword = async function(loginPassword, userPassword){
    return await bcrypt.compare(loginPassword,userPassword);
}

const User = mongoose.model('User',userSchema);

module.exports = User;