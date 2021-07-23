const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let reason = args.slice(0).join(' ');
    const embed1 = new Discord.MessageEmbed()
    .setTitle(`Como usar? - ${message.author.username}`)
   .setDescription(`:Ferro: Ultilização: 
   \`;conquista <nome-da-conquista>\`
   
   :Minecraft: Exemplo:
   \`;conquista Bolo de torta!\`
   
   :Minecraft: Exemplo 2º:
   \`;conquista Ladrão de biscoitos\``)
   .setFooter(`Author: ${message.author.tag}`)
    if (reason.length < 1) return message.channel.send(embed1)
let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
    let embed = new Discord.MessageEmbed()

        .setTitle(`:unlock: Conquista desbloquada :unlock:`)
        .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=Nova+conquista&t=${args[0]}`)
        .setColor('GREEN')
 .setFooter(`| Consquista desbloqueada! ${message.author.username}`, message.author.displayAvatarURL())
 .setTimestamp()
    
    message.channel.send(embed)
}

exports.help = {
    name: 'mcconsquista',
    aliases: ['mc-consquista']
    }
