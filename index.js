const Discord = require("discord.js");
const on = require("on");
const config = require("./config.js");
const bot = new Discord.Client();
const json = require("json");
const uptime = require("uptime");
const fly = require("fly");
const ping = require("ping");
const fs = require("fs");
const db = require("quick.db");
const disbut = require('discord-buttons')(bot);
const express = require("express");

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

bot.config = config;
bot.queue = new Map()

//inicio de tudo

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//puxando a pasta comands + o comando
    commandFile.run(bot, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`${message.author}, Desculpe mais não achei este comando no meu registro digite n!help para saber meus comandos!.`)
    return message.channel.send(embed);}
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

//Status do bot

bot.on("ready", () => {
  let activities = [
      //`Bot em manutenção por tempo indefinido`
      `Utilize ${config.prefix}help para obter ajuda`,
      /*`${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`*/,
      'Canal do criador Gustavo 360 YT',
      'Criador ✞☾꧁𝑻𝒉𝒆 𝐺𝑢𝑠𝑡𝑎𝑣𝑜𝑥꧂☽✞#5021 ',
      'Host 24h suporte ao criador'
    ],
    i = 0;
  setInterval( () => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/malaguty"
      }), 5000 * 1); 
  bot.user
      .setStatus("Canal do criador Gustavo 360 YT")
      .catch(console.error);
console.log("Status personalizado ativo!")
});

//mencao

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'ferinha')
    return
    if(message.content == `<@${bot.user.id}>` || message.content == `<@!${bot.user.id}>`) {
    return message.channel.send(`🔮 | Olá ${message.author}, veja meus comandos com **${config.prefix}help**!`)
    }
    }); 
    
 //XP   
    
bot.on("message", async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
  let xpReward;
  if(bot.user.id === "831601187434004520") xpReward = Math.floor(Math.random() * 50) + 50
  if(xpReward == 0) xpReward = 500
  let xp = db.fetch(`xp.${message.author.id}`)
  let level = db.fetch(`level.${message.author.id}`) || "1"
  let level2 = level + 50
  let levels = level2 * 50

  if(!xp){
      db.add(`xp.${message.author.id}`,xpReward)
  }else if(xp){
      db.add(`xp.${message.author.id}`,xpReward)
  }

  if(xp > levels){
      db.add(`level.${message.author.id}`,50)
  message.author.send(`<@${message.author.id}>, subiu pro nivel **${level2}**`)

  }
})

//afk

bot.on("message", async message => {

let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**`).then(i => i.delete({timeout: 5000}));
    }
  }
  
  if (authorStatus) {
    message.channel.send(`**${message.author.tag}** não está mais AFK.`).then(i => i.delete({timeout: 5000}));
    afk.delete(message.author.id)
  }
})

//responder dm

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.channel.type == 'dm') return msg.reply('> __:pleading_face:-**Não Respondo Dm**__\n> __:space_invader:-**Sou Apenas Um Bot!**__')
  if (msg.content == `<@!${bot.user.id}` || msg.content == `<@!${bot.user.id}>`)  {
  let embed1 = new Discord.MessageEmbed()
  .setTitle(`Olá Pessoas!`)
  .setColor(`#FFFF00`)
  .setDescription(`
> :roxo: » Meu nome é **Fallout.grp** e a minha função é ajudar vocês!
> :fix: » Meu prefixo é *J!*". "**.
> :dc: » Use **.help** para ver meus comandos.
> :dc: » Link Do Meu Servidor [Clique Aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)**`)
  
  .setFooter(`Fallout.grp`)
  msg.channel.send(embed1)
} 
});

//autorole

bot.on("guildMemberAdd", async(member) => {
let role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
if(role) {
  member.roles.add(role.id)
} else {
  return;
}
});

//commands file Error

bot.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(bot, message, args);
    } catch (err) {
      message.channel.send({embed: {
        description: `❌ » Desculpa, nao consegui encontrar o comando \__${command}__\ em minha lista de commandos.`,
        color: "00000"
      }}).then(m => m.delete({timeout: 6000}));
    console.error('Erro:' + err);
  }
})

bot.on("guildCreate", guild => {
    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })

    const joinEmbed = new Discord.MessageEmbed()
        .setColor('(#303136)')
        .setDescription("Olá obg por me adicionar no seu servidor 😘 para mais commandos digite `j!help` ,canal do meu criador https://youtube.com/c/gustavo360yt rumo 1k de inscritos, fui criado por ϟ Rei Rockstar ᵃᶜʲ ϟ | 🌙.#0001 ")
      
    defaultChannel.send((joinEmbed))
})

bot.login(process.env.TOKEN);