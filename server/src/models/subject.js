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
  requiredUserType: {type: Number, default: 1}, 
  links: [linkSchema],
})

const subjectSchema = mongoose.Schema({
  title: { type: String, unique: true },
  updateDate: String,
  accessLevel: { type: Number, default: 1 },
  themes: [themeSchema],
  price: Array
})

exports.subjectSchema = mongoose.model('Subject', subjectSchema)
exports.themeSchema = mongoose.model('Theme', themeSchema)
exports.linkSchema = mongoose.model('Link', linkSchema)