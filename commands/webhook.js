const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 try {
 let name = ('nome do webhook');

 let avatar = {avatar: 'https://i.imgur.com/VqqjSck.jpg'} //se quiser colocar um avatar pro webhook
 

 message.channel.createWebhook(name, avatar).then(w => { //aqui ele ira criar o webhook com o nome e avatar 
 w.send('mensagem que sera enviada').then((
 ) => w.delete()) //aqui o bot ira deletar o webhook apos a mensagem ser enviada

 });

 } catch (err) {
 message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**') //caso o bot n tenha permissão de criar o webhook
 }
} 