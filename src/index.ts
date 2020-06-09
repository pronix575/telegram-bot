import TelegramBot from 'node-telegram-bot-api'
import config from 'config'

const token: string = config.get('token')

const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Received your message');
})