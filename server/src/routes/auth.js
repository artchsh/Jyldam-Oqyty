const express = require('express')
const router = express.Router()
const Schema = require('../models/model')
const bcrypt = require('bcrypt')

router.use(logger)

router.get('/', (req, res) => {
  res.json('200')
})

router.post('/login', (req, res) => {
  const login = req.body.login
  Schema.User.findOne({ login }, (err, docs) => {
    if (err) { throw err }
    if (docs == null) {
      return res.status(404)
    }
    const password = req.body.password
    const hash = docs.password
    bcrypt.compare(password, hash, function (err, result) {
      if (err) { throw err }
      if (result) {
        res.status(200).send({
          token: 'test123',
          expiresIn: '120',
          authState: docs
        })
      } else {
        res.status(500)
      }
    })
  })
})

router.post('/register', (req, res) => {
  const saltRounds = 10
  const password = req.body.password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) { return res.status(500) }
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) { return res.status(500) }
      req.body.password = hash
      const user = new Schema.User(req.body)
      user.save((err, docs) => {
        if (err) { return res.status(404) }
      })
    })
  })
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
