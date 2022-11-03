const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

router.use(logger)

router.get('/', (req, res) => {
    res.json('200')
})

router.post('/login', (req, res) => {
    let login = req.body.login
    userSchema.findOne({ login: login }, (err, docs) => {
        if(docs == null) {
            return res.status(500)
        }
        let password = req.body.password
        let hash = docs.password
        bcrypt.compare(password, hash, function(err, result) {
            if (result) {
                res.status(200).send({
                    token: 'test123',
                    expiresIn: '120',
                    authState: docs,
                })
            } else {
                res.status(500)
            }
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