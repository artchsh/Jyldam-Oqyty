const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//bcrypt settings
const saltRounds = 10

router.use(logger)

//bcrypt use
router.post('/login', (req, res) => {
    // compare password with hash in db
    // var hash contain hash got from db 
    // var password contain password from form
    let password = req.body;
    let hash;
    bcrypt.compare(password, hash, function(err, result) {
        // result == true||false
        res.json(result)
    });
})

router.post('/register', (req, res) => {
    // from req body change password to a hash and then save to mongodb


    const user = new userSchema(req.body)
    let password = req.body.
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            // Store hash in your password DB.
        });
    });

    user.save((err, user) => {
        if (err) {
            // error handler
            return console.log('err', err)
        }
        // success register
        console.log('user registered')
    })
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router