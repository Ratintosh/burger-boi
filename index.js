const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjU5MDQ5MjA0MDA5NjY0NTEz.XgIqDw.UKqHIfL2gGlCcPP5kYM-09KfYRQ')
