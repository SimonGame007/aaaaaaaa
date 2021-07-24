const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  description: "Alterar de fato, o volume da música",
  execute(client, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("😢 Perdão.. Mas apenas administradores podem executar este comando")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("❌ Erro: Você não está em nenhum canal fe voz")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("🔍 Ah? Ata não estou tocando nada, tente colocar uma música.")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("Use apenas numerais")
      return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("O limite é de 200, você pode ficar surdo!")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setTitle("🔊 Volume")
    embed.setDescription(`Volume alterado para ${args[0]}`)
    message.channel.send(embed)
    
  }
}; 