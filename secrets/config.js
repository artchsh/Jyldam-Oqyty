// initialization
let config = {};

config.backend = {}
config.frontend = {}
config.mongo = {}
config.api = {}

// settings
config.backend.port = '3030' //express port

config.api.ip = process.env.API_URL || 'http://localhost:3030'

config.mongo.connect = 'mongodb://localhost:27017/jyldam-oqyty' //mongodb string connection


module.exports = config;