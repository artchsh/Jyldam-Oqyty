const express = require("express")
const router = express.Router()
const subjectSchema = require('../models/subject')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/user'
async function mongooseConnect() {
    await mongoose.connect(url)

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

mongooseConnect().catch(err => console.log(err))
let db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})

router.use(logger)
router.get('/list', (req, res) => {

    subjectSchema.find({}, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

router.post('/add', (req, res) => {
    const subject = new subjectSchema(req.body)
    subject.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('saved subject')
    })
    res.json(req.body)
})

router.get('/find/:id', (req, res) => {

    subjectSchema.findById(req.params.id, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

router.patch('/find/:id', (req, res) => {
    let reqBody = req.body
    subjectSchema.findByIdAndUpdate(req.params.id, reqBody, function (err, docs) {
        if (err) { res.status(500) }
        res.json(reqBody)
    })
})

router.get('/themes/find/:id/:themeid', (req, res) => {
    let reqBody = req.body
    let query = { _id: req.params.id }
    const subject = subjectSchema.findOne(query, function(err, obj) {if(err){console.log(err)} console.log(obj)})
    const theme = subject.themes.findOne({ _id: req.params.themeid })
    console.log(theme)
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router