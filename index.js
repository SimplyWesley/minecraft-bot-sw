const {Client, RichEmbed } = require('discord.js')
 
const bot = new Client()

const botconfig = require("./botConfig.json");
 
const ping = require('minecraft-server-util')
 
var PREFIX = botconfig.prefix;
 
bot.on('ready', () =>{
    console.log('Bot has come online.')
})
 
bot.on('message', message =>{
 
    let args = message.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'mc':
 
            ping('dinosaur.aternos.org', 10201, (error, reponse) =>{
                if(error) throw error
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', "minecraftmetcheaters.aternos.me")
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                .setColor("#2cfc03")
               
                message.channel.send(Embed)
            })
        break
 
    }
 
})
 
bot.login(process.env.token);