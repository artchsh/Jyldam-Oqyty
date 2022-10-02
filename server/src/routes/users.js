const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')
const mongoose = require('mongoose')

async function mongooseConnect() {
    await mongoose.connect('mongodb://localhost:27017/user')
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

router.use(logger)

router.get('/', (req, res) => {
    res.send('Go on.')
})

router.post('/add', async (req, res) => {
    mongooseConnect().catch(err => { return console.log(err) })
    const user = new userSchema(req.body)
    user.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('saved user')
    })
    res.json({ "state": "success", "requestBody": req.body})
})

router.get('/find/:id', (req, res) => {
    let id = req.params.id
    res.json({ "api": "user_find", "id": id })
})

router.get('/list', (req, res) => {
    mongooseConnect().catch(err => console.log(err))
    userSchema.find({}, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router