const { MessageEmbed, Client } = require('discord.js');
const client = new Client(); 

exports.run = (client, message, args) => {
    client.guilds.cache.forEach(guild => {
        let channel = guild.channels.cache.filter(x => x.type != "category").random();
        
        if(!channel) return;

            let aviso = new MessageEmbed()
            .setAuthor('・Aviso - ' + client.user.tag, client.user.displayAvatarURL())
            .setDescription(message.content)
            .setFooter('・Author: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
            
            channel.send(aviso);
    });
}
