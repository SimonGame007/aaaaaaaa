const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('<:backup:822238195794051076> | Bot Stats')
            .setColor('RED')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `${client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `${client.channels.cache.size}`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '<a:carregando:822636519612612648>  Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                }
            )
            .setFooter(`Autor do Comando: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}
