'use strict';

const mongoose = require('mongoose')

const linkSchema = mongoose.Schema(
  {
    name: String,
    link: String,
    type: String
  }
)

const themeSchema = mongoose.Schema({
  title: String,
  text: String,
  links: [linkSchema],
})

const subjectSchema = mongoose.Schema({
  title: String,
  updateDate: String,
  accessLevel: { type: Number, default: 1 },
  themes: [themeSchema],
  price: Array
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject