const express = require('express')
const router = express.Router()
const Schema = require('../models/model')
// TODO Переделать в корни всю систему API. Теперь links, themes, subjects, courses будут независимы друг от друга.
router.use(logger)

router.get('/list', (req, res) => {
  Schema.Subject.find({}, function (err, docs) {
    if (err) { res.send(err).status(500) }
    res.json(docs)
  })
})

router.get('/find/id/:id', (req, res) => {
  Schema.Subject.findById(req.params.id, function (err, docs) {
    if (err) { res.send(err).status(500) }
    res.json(docs)
  })
})

router.get('/find/name/:subjectName', (req, res) => {
  Schema.Subject.findOne({ title: req.params.subjectName }, function (err, docs) {
    if (err) { res.send(err).status(500) }
    res.json(docs)
  })
})

router.patch('/find/:id', (req, res) => {
  const reqBody = req.body
  Schema.Subject.findByIdAndUpdate(req.params.id, reqBody, function (err, docs) {
    if (err) { res.send(err).status(500) }
    res.json(docs)
  })
})

router.post('/add', (req, res) => {
  const subject = new Schema.Subject(req.body)
  subject.save((err, user) => {
    if (err) {
      res.send(err).status(500)
    }
    console.log('saved subject')
  })
  res.json(req.body)
})

// router.patch('/find/themes/:id/:themeid/:type', (req, res) => {
//     Schema.Subject.findOne(
//         { _id: req.params.id },
//         function (err, docs) {
//             for (let i in docs.themes) {
//                 if (docs.themes[i]._id = `${req.params.themeid}`) {
//                     switch(req.params.type) {
//                         case 'link':
//                             docs.themes[i].links = req.body
//                             break
//                         case 'theme':
//                             docs.themes[i] = req.body
//                             break
//                         case 'show':
//                             res.json(docs.themes[i])
//                             break
//                         default:
//                             res.status(500)
//                     }
//                 }
//             }
//         docs.save()
//     })
// })

router.patch('/themes/find/:id/:type', (req, res) => {
  Schema.Subject.findOne({ _id: req.params.id },
    function (err, docs) {
      if (err) throw err
      for (const i in docs.themes) {
        switch (req.params.type) {
          case 'themes':
            docs.themes[i] = req.body
            break
          case 'show':
            res.json(docs.themes[i])
            break
          default:
            res.send(err).status(500)
        }
      }
      docs.save()
    })
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
