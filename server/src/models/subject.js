'use strict'

const mongoose = require('mongoose')

const linkSchema = mongoose.Schema(
  {
    name: { type: String, unique: true },
    link: String,
    type: String
  }
)

const themeSchema = mongoose.Schema({
  title: { type: String, unique: true },
  text: String,
  requiredUserType: { type: Number, default: 1 },
  links: Array
})

const subjectSchema = mongoose.Schema({
  title: { type: String, unique: true },
  updateDate: String,
  accessLevel: { type: Number, default: 1 },
  themes: Array
})

exports.subjectSchema = mongoose.model('Subject', subjectSchema)
exports.themeSchema = mongoose.model('Theme', themeSchema)
exports.linkSchema = mongoose.model('Link', linkSchema)
