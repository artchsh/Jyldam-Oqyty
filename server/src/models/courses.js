'use strict';
// TODO объединить все модели в один файл
const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    title: { type: String, unique: true },
    updateDate: String,
    description: String,
    themes: [{
        subject: { type: String, unique: true },
        themesIDs: Array,
    }],
})

exports.courseSchema = mongoose.model('Course', courseSchema)