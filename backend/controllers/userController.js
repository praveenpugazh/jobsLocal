const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  console.log(req.body)
  console.log(name, email, password)
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }
  res.send('register route')
})

const LoginUser = asyncHandler(async (req, res) => {
  res.send('login route')
})

module.exports = {
  registerUser,
  LoginUser
}

