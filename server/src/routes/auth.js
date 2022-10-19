const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

router.use(logger)

router.get('/', (req, res) => {
    res.json('200')
})

//bcrypt use
router.post('/login', (req, res) => {
    let login = req.body.login
    let password = req.body.password
    userSchema.findOne({ login: login }, (err, docs) => {
        let hash = docs.password
        bcrypt.compare(password, hash, function(err, result) {
            // result == true||false
            res.json(result)
        });
    })
})

router.post('/register', (req, res) => {
    const saltRounds = 10
    let password = req.body.password
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) { return res.json(err) }
            req.body.password = hash
            const user = new userSchema(req.body)
            user.save((err, docs) => {
                if(err){return res.json(err) }
            })
        });
    });
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router