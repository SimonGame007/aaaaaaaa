const Discord = require("discord.js");
module.exports = {
  name: "kick",
  //cmd por ferinha (esse cmd expulsa alg)

  run: async(client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`:x: | ${message.author} VocÃª precisa da permissÃ£o **EXPULSAR MEMBROS** para utilizar este comando!`)

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";


//-----------------------------------------|
const embed = new Discord.MessageEmbed()
        .setTitle(`ðŸª“ VocÃª foi expulso!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`ðŸª“ Servidor: \`${message.guild.name}\`
ðŸª“ Motivo: ${reason}`)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));
//envia msg no pv da pessoa----------------|



        if (!args[0]) return message.channel.send(`:x: | ${message.author} Menciona alguÃ©m ou utilize o ID de  alguÃ©m para expulsar!`);

        if(!usu) return message.channel.send(`:x: | ${message.author} VocÃª nÃ£o mencionou e nem utilizou um ID vÃ¡lido!`);

        if(!usu.kickable) return message.channel.send(`:x: | ${message.author} Ops! Eu nÃ£o tenho permissÃ£o para expulsar este membro!`);

        const ferinha = new Discord.MessageEmbed()
        .setTitle(`ðŸª“ ExpulsÃ£o!`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`ðŸª“ Expulso: ${usu.user} (\`${usu.user.id}\`)
ðŸª“ Motivo: \`${reason}\`
ðŸª“ Por: ${message.author} (\`${message.author.id}\`) `)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        await usu.send(embed);
        await usu.kick({
            reason: reason
        });
        
        
        message.channel.send(ferinha);
    }
}


 