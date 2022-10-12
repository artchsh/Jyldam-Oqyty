const express = require("express")
const router = express.Router()
const userSchema = require('../models/user')

router.get('/', (req, res) => {
    res.send('Go on.')
})

router.post('/add', async (req, res) => {

    const user = new userSchema(req.body)
    user.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('saved user')
    })
    res.json({ "state": "success", "requestBody": req.body })
})

router.get('/find/:id', (req, res) => {
    let id = req.params.id
    res.json({ "api": "user_find", "id": id })
})

router.post('/find/update/:id', (req, res) => {
    let id = req.params.id
    var userId = req.body.userId;

    var conditions = {
        _id: userId
    }

    userSchema.findOneAndUpdate(conditions, update, function (error, result) {
        if (error) {
            res.sendStatus(500)
        } else {
            console.log(result);
        }
    });
})

router.get('/list', (req, res) => {
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