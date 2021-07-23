const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
if(!message.author.id == "642780786143264808") return message.reply("error!").then(msg => msg.delete(7000))
    var guild = message.guild; 

    const a = message.channel.guild.members.filter(m => m.presence.status === 'online')
    const b = message.channel.guild.members.filter(m => m.presence.status === 'dnd')
    const c = message.channel.guild.members.filter(m => m.presence.status === 'idle')


    var regStr = /\{.+\}/g
    var msg_to_send = "ola poderia entrar no servidor obg!"
    var embedLs = regStr.exec(msg_to_send);
    var embed = null;
    var argm = [msg_to_send]
    if(embedLs != null){
        embed = JSON.parse(embedLs[0]);
        msg_to_send = msg_to_send.replace(regStr, "");
        argm = [msg_to_send, embed]
    } 
    if(msg_to_send == null && String(0)) return message.reply("Você deve selecionar algum argumento, para que envie para as pessoas, meteodo de uso p!div <MENSAGEM> !")
      
  message.author.send(`**Comecei a enviar para: ${ message.guild.members.size } Membros no total!**`)
    message.channel.send("Comecei a divulgar, informações no privado!").then(msg => msg.delete(7000))
   /*   a.users.map(member => {	  
      member.send(msg_to_send).then(() => {
          console.log(`Mensagem Recebida: ${member.user.username} (${member.user.id}) -> Tipo: Online`)
      }).catch(e => console.log(`Membro ${member.user.username} não recebeu a mensagem! Tipo: Online`));
  });*/
      b.users.map(member => {	  
      member.send(msg_to_send).then(() => {
          console.log(`Mensagem Recebida: ${member.user.username} (${member.user.id}) -> Tipo: Não Pertubar`)
      }).catch(e => console.log(`Membro ${member.user.username} não recebeu a mensagem! Tipo: Não-Pertubar`));
  });
      c.users.map(member => {
          member.send(msg_to_send).then(() => {
          console.log(`Mensagem Recebida: ${member.user.username} (${member.user.id}) -> Tipo: Ausente`)
      }).catch(e => console.log(`Membro ${member.user.username} não recebeu a mensagem! Tipo: Ausente`));
  }); 
  /*d.forEach(member => {
    member.send(msg_to_send).then(() => {
    console.log(`Mensagem Recebida: ${member.user.username} (${member.user.id}) -> Tipo: Offline`)
}).catch(e => console.log(`Membro ${member.user.username} não recebeu a mensagem! Tipo: Offline`));

});*/

message.author.send(`Mensagem enviada para: ${b.size}\n  ${c.size} Ausentes \n | Executado por ${message.author.tag}\n | Total de membro avisados: ${message.guild.members.size} **`);
}

return console.log("Comando executado com sucesso, verifique se deu algum erro, se não, ignore esta mensagem ! ^^")