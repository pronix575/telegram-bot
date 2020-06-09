const telegram = require('telegram-bot-api')
const config = require('config')

const token = config.get('token')
console.log(token)