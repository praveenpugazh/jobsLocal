const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})
//routes
app.use('/api/users', require('./routes/userRoutes'))

app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
