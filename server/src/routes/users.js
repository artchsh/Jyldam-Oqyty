const express = require('express')
const router = express.Router()
const userSchema = require('../models/user')
// TODO Переделать систему точно так же как subjects.js
router.use(logger)

router.get('/', (req, res) => {
  res.status(200)
})

router.post('/add', async (req, res) => {
  const user = new userSchema(req.body)
  user.save((err, user) => {
    if (err) {
      console.log('err', err)
    }
    console.log('saved user')
  })
  res.json({ state: 'success', requestBody: req.body })
})

router.get('/find/:id', (req, res) => {
  const id = req.params.id
  res.json({ api: 'user_find', id })
})

// router.post('/find/update/:id', (req, res) => {
//   const id = req.params.id
//   const userId = req.body.userId
//   const conditions = {
//     _id: userId
//   }
//   userSchema.findOneAndUpdate(conditions, update, function (error, result) {
//     if (error) {
//       res.sendStatus(500)
//     } else {
//       console.log(result)
//     }
//   })
// })

router.get('/list', (req, res) => {
  userSchema.find({}, function (err, docs) {
    if (err) { res.send(err) }
    res.json(docs)
  })
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
