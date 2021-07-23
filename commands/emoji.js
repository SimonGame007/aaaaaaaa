const {MessageEmbed} = require("discord.js")
const {cor} = require("../config.js")
module.exports.run = async(client, message, args,db)=>{
 var animado="", naoAnimado=""
 message.guild.emojis.cache.forEach(emoji=>{
 if(emoji.animated){
 animado = animado +" <a:"+emoji.name+":"+emoji.id+">"
 }else{
 naoAnimado = naoAnimado+" <:"+emoji.name+":"+emoji.id+">"
 }
 })
 const embed = new MessageEmbed()
 .setDescription(`Aqui Estão todos os emojis do servidor!
Animados:
${animado}
Não animados:
${naoAnimado}
 `)
 .setColor(cor)
 message.channel.send(embed)
} 