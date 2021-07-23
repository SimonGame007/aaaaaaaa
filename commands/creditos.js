const Discord = require('discord.js')

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
        .setColor("black")
        .setDescription(`Teste`)


        message.channel.send(embed);

}
