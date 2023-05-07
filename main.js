const { Telegraf } = require('telegraf')
const bot = new Telegraf('5988968223:AAFfTHmJ9fwJA0sAQmKG4hFOcSE6YYyDNWE')
const chatId = '5364085071'

bot.start((ctx) => ctx.reply(`🔱 Welcome to HidroCyber Official support bot!
sent every message you want to the admin.

🚫Rules:
      1. Don't spam
      2. Don't use badwords, otherwise you'll be blocked!
      3. Don't advertise here.
      4. Don't want the admin ID otherwise you'll be blocked!
      5. Try to send important messages.
      6. Your messages language must be Persian (فارسی) or English.
      7. If you didn't get any response, maybe you didn't comply the rules or the bot is off. Try resending the message after a week.

✅ Supported Languages:
              Persian (فارسی) - English

⚜️ The only official Channel: @HidroCyber`))


bot.on('message', (ctx) => {
  const message = ctx.message
  const user = message.from

  bot.telegram.forwardMessage(chatId, user.id, message.message_id)
  ctx.reply("Sent Successfuly!")
})

bot.startPolling()