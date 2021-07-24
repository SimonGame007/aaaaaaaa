
const axios = require('axios')
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
        let ip = args.join(' ')
        if(!ip) return message.reply('Você esqueceu de especificar o ip!')
               axios.get(`https://api.mcsrvstat.us/2/${ip}`).then(async response => {
            
            const embed = new MessageEmbed()
            .setTitle('Status do servidor:')
            .setColor("#008CFF")
            .setDescription(`**IP:**\n\`\`\`${ip}\`\`\`\n**Jogadores Onlines:**\n\`\`\`${response.data.players.online}\`\`\`\n**Versão:**\n\`\`\`${response.data.version}\`\`\`\n\n**Motd:**\n\`\`\`${response.data.motd.clean[0]}\`\`\``)
            .setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`)
            .setFooter(`Comando feito por JustRayp#6911`, message.author.displayAvatarURL())
            .setThumbnail(message.author.avatarURL())

      return  message.reply(embed)
        }).catch(error => { 
        message.reply('')
        if(ip === "Ip do seu server") {
let Corina = new MessageEmbed()
.setTitle('Status do servidor:')

.setColor('#008CFF')
.setDescription('**IP:**\n\`\`\`ip do teu server\`\`\`\n**Status:**\n\`\`\`Offline\`\`\`\n**Players:**\n\`\`\`Offline\`\`\`\n**Versão:**\n\`\`\`1.8.9\`\`\`')
.setFooter(`Comando feito por JustRayp#6911`, message.author.displayAvatarURL())
.setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`)
.setThumbnail(message.author.avatarURL())
return message.channel.send(Corina)
}
 
        })
    }
   