const express = require("express")
const router = express.Router()
const subjectModel = require('../models/subject')

router.use(logger)

router.get('/list', (req, res) => {
    subjectModel.subjectSchema.find({}, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

router.post('/add', (req, res) => {
    const subject = new subjectModel.subjectSchema(req.body)
    subject.save((err, user) => {
        if (err) {
            console.log('err', err)
        }
        console.log('saved subject')
    })
    res.json(req.body)
})

router.get('/find/:id', (req, res) => {

    subjectModel.subjectSchema.findById(req.params.id, function (err, docs) {
        if (err) { res.send(err) }
        res.json(docs)
    })
})

router.patch('/find/:id', (req, res) => {
    let reqBody = req.body
    subjectModel.subjectSchema.findByIdAndUpdate(req.params.id, reqBody, function (err, docs) {
        if (err) { res.status(500) }
        res.json(reqBody)
    })
})

router.patch('/themes/find/:id/:themeid/:type', (req, res) => {
    subjectModel.subjectSchema.findOne(
        { _id: req.params.id },
        function (err, docs) {
            for (let i in docs.themes) {
                if (docs.themes[i]._id = `${req.params.themeid}`) {
                    switch(req.params.type) {
                        case 'link':
                            docs.themes[i].links = req.body
                            break
                        case 'theme':
                            docs.themes[i] = req.body
                            break
                        case 'show':
                            res.json(docs.themes[i])
                            break
                        default:
                            res.status(500)
                    }
                }
            }
        docs.save()
    })
})

router.patch('/themes/find/:id/:type', (req, res) => {
    subjectModel.subjectSchema.findOne({ _id: req.params.id },
        function (err, docs) {
            for (let i in docs.themes) {
                    switch(req.params.type) {
                        case 'themes':
                            docs.themes[i] = req.body
                            break
                        case 'show':
                            res.json(docs.themes[i])
                            break
                        default:
                            res.status(500)
                    }
                }
        docs.save()
    })
})

function logger(req, res, next) {
    console.log(`http://localhost:3000${req.originalUrl}`)
    next()
}

module.exports = router