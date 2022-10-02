'use strict';

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, default: '' },
  surname: { type: String, default: '' },
  avatar: { type: String, default: '' },
  login: { type: String, default: '' },
  email: { type: String, default: '' },
  quickAcces: { type : Array , "default" : [] },
  bookmarks: { type : Array , "default" : [] },
  purchaseHistory: { type : Array , "default" : [] },
  password: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  accessLevel: { type: Number, default: 1 },
  userType: { type: Number, default: 1 },
  subjects: { type : Array , "default" : [] },
  inventory: { type : Array , "default" : [] }
})

const User = mongoose.model('User', userSchema)

module.exports = User