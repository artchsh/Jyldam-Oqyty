// initialization
let config = {};

config.backend = {}
config.frontend = {}
config.mongo = {}
config.api = {}

// settings
config.backend.port = '3000' //express port

config.frontend.ip = 'http://localhost' //vuejs ip
config.frontend.port = '8080' //vuejs port

config.api.ip = process.env.API_URL || 'http://localhost:3000'

config.mongo.connect = 'mongodb://localhost:27017/user' //mongodb string connection

module.exports = config;