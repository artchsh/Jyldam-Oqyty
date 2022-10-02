'use strict';

const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
  title: { type: String, default: '' },
  updateDate: { type: String, default: '' },
  accessLevel: { type: Number, default: 1 },
  themes: { type: Array, default: [] },
  price: { type: Array, default: [] }
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject