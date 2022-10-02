const express = require("express")
const router = express.Router()
const subjectSchema = require('../models/subject')
const mongoose = require('mongoose')

async function mongooseConnect() {
    await mongoose.connect('mongodb://localhost:27017/subject')
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

router.use(logger)

router.get('/list', (req, res) => {
    mongooseConnect().catch(err => console.log(err))
    subjectSchema.find({}, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

router.post('/add', (req, res) => {
    mongooseConnect().catch(err => console.log(err))
    const subject = new subjectSchema(req.body)
    subject.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('saved subject')
    })
    res.json(req.body)
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router