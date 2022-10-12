const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')
const mongoose = require('mongoose')

router.use(logger)

router.post('/login', (req, res) => {

})

router.post('/register', (req, res) => {
    const user = new userSchema(req.body)
    user.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('user registered')
    })
    res.json({ "state": "success", "requestBody": req.body })
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router