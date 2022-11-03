'use strict';

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, default: '' },
  surname: { type: String, default: '' },
  // avatar: { type: String, default: '' },
  login: { type: String, default: '', unique: true },
  email: { type: String, default: '', unique: true },
  // quickAccess: { type : Array , "default" : [] },
  // bookmarks: { type : Array , "default" : [] },
  courses: { type: Array, "default": [] },
  // subjects: { type: Array, "default": [] },
  password: { type: String, default: '' },
  // phoneNumber: { type: String, default: '' },
  // accessLevel: { type: Number, default: 1 },
  userType: { type: Number, default: 1 },
  // inventory: { type : Array , "default" : [] }
})

const User = mongoose.model('User', userSchema)

module.exports = User