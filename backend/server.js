const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//Connect to DB
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('hello')
})
//routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
