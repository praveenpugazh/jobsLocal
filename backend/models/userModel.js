const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    phone: {
      type: Number,
      required: [true, 'Please add a mobile number'],
      unique: true
    },
    email: {
      type: String,
      required: [false, 'Please add a email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    isEmployer: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timeStamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
