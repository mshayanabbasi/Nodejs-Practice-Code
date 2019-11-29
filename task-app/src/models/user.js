const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
                }
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 7,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('Password is must large')
                }
            }
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be positive')
                }
            } 
        }
        })

module.exports = User