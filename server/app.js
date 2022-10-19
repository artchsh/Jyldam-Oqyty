const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('../secrets/config')

const app = express()

const url = config.mongo.connect
const port = config.backend.port
async function mongooseConnect() { await mongoose.connect(url) }
mongooseConnect().catch(err => console.log(err))

// troubleshooting
let db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const userRouter = require("./src/routes/users")
app.use("/api/users", userRouter)

const subjectRouter = require("./src/routes/subjects")
app.use("/api/subjects", subjectRouter)

const authRouter = require("./src/routes/auth")
app.use("/api/auth", authRouter)

app.get('/api', (req, res) => {
  res.json({ "state": "online" })
})

app.listen(port, () => {
  console.log(`EduPortal API is running on port http://localhost:${port}`)
})