const Discord = require('discord.js')

const client = new Discord.Client()




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'c!help') {
    msg.channel.send(`${msg.author}, Check your DM's!`);
    //Embeded Message for help
    msg.author.send({embed: {
            color: 3447003,
            "title": "Commands",
            "author": {
                "name": "Burger Boi",
                "icon_url": "https://i.imgur.com/1b0ZkPG.jpg"
            },
            "footer": {
                "text": "Created by SpaceRat#6734. DM me for any info/updates",
                "icon_url": "https://cdn.discordapp.com/avatars/603395191054925835/589a3cfc44ee43ac1abd62a05cac2cc8.png?size=128"
            },
            "fields": [
                {
                    "name": "c!help",
                    "value": "Displays all the commands.",
                    "inline": false
                },
                {
                    "name": "c!ping",
                    "value": "Pong.",
                    "inline": false
                }
            ]
        }
  });

  }
})

//rest of code here













client.login('NjU5MDQ5MjA0MDA5NjY0NTEz.XgJOAA.51PCbuVhRmQBgNafwwcbunnueT4')
