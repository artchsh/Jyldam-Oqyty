'use strict'

const mongoose = require('mongoose')

// Subject's schemas

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

// Course schema

const courseSchema = mongoose.Schema({
  title: { type: String, unique: true },
  updateDate: String,
  description: String,
  themes: [{
    subject: { type: String, unique: true },
    themesIDs: Array
  }]
})

// User Schema
const userSchema = mongoose.Schema({
  name: {
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' }
  },
  login: { type: String, default: '', unique: true },
  email: { type: String, default: '', unique: true },
  courses: { type: Array, default: [] },
  password: { type: String, default: '' },
  userType: { type: Number, default: 1 }

  // ! COMING SOON FEATURES
  // avatar: { type: String, default: '' },
  // quickAccess: { type : Array , "default" : [] },
  // bookmarks: { type : Array , "default" : [] },
  // subjects: { type: Array, "default": [] },
  // phone: { type: String, default: '' },
  // accessLevel: { type: Number, default: 1 },
  // inventory: { type : Array , "default" : [] }
})

exports.User = mongoose.model('User', userSchema)
exports.Course = mongoose.model('Course', courseSchema)
exports.Subject = mongoose.model('Subject', subjectSchema)
exports.Theme = mongoose.model('Theme', themeSchema)
exports.Link = mongoose.model('Link', linkSchema)
