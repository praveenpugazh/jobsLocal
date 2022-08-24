const registerUser = (req, res) => {
  res.send('register route')
}

const LoginUser = (req, res) => {
  res.send('login route')
}

module.exports = {
  registerUser,
  LoginUser
}
