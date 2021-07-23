const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`Invite Bot`, client.user.displayAvatarURL())
  .setDescription(`**Ola ${message.author.username} 😁 » Vejo que vocé gostou de mim 🙂, você vai me ajudar muito me adicionando em seu servidor 😇, para me adicionar [Clique Aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)**`)
  .setColor("#00000")
  message.channel.send(invite)
}