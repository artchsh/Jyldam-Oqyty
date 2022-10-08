const express = require('express')
const config = require('../secrets/config')

const app = express()
const port = config.backend.port

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const userRouter = require("./src/routes/users")
app.use("/api/users", userRouter)

const subjectRouter = require("./src/routes/subjects")
app.use("/api/subjects", subjectRouter)

app.get('/api', (req, res) => {
  res.json({ "state": "online" })
})

app.listen(port, () => {
  console.log(`EduPortal API is running on port http://localhost:${port}`)
})