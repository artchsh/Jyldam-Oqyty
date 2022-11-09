const express = require('express')
const router = express.Router()
const Schema = require('../models/model')

router.use(logger)

router.get('/find/:id', (req, res) => {
  const id = req.params.id
  res.json({ id }).status(200)
})

router.post('/find/update/:id', (req, res) => {
  const id = req.params.id
  Schema.User.findOneAndUpdate({ _id: id }, update, function (err, result) {
    if (err) {
      res.send(err).status(500)
    } else {
      console.log(result)
    }
  })
})

router.get('/list', (req, res) => {
  Schema.User.find({}, function (err, docs) {
    if (err) { res.send(err).status(500) }
    res.json(docs)
  })
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
