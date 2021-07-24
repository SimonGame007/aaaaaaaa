
const Discord = require ('discord.js')

exports.run = async (client, message, args, prefix) => {
           if (!message.member.permissions.has("MANAGE_NICKNAMES"))
    return message.reply(
      "Você não tem permissão para fazer isso!"
    );
let user = message.mentions.users.first()
if(!user) return message.reply("Mencione um membro para mudar o apelido!")

let nickname = args.slice(1).join("")
if(!nickname) return message.reply("Mencione um nick novo")

let member = message.guild.members.cache.get(user.id);
await member.setNickname(nickname);

message.channel.send(`Apelido alterado`)
}