const { Telegraf } = require('telegraf')
const bot = new Telegraf('bot_token')
const chatId = 'admin_chatid'

bot.start((ctx) => ctx.reply(`
⚜️ The creator only official Channel: @HidroCyber`))


bot.on('message', (ctx) => {
  const message = ctx.message
  const user = message.from

  bot.telegram.forwardMessage(chatId, user.id, message.message_id)
  ctx.reply("Sent Successfuly!")
})

bot.startPolling()
