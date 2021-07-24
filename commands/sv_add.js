
client.on("guildCreate", function(guild){ 
  
  var channel = client.channels.cache.get("815794981104386105");
  const msg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} está em um novo servidor.`)
    .setDescription(`**Nome: \`${guild.name}\`\nID: \`${guild.id}\`\nMembros: \`${guild.memberCount}\`\nTotal de servidores: \`${client.guilds.cache.size}\`**`)
    .setTimestamp()
  channel.send(msg);
});
client.on("guildDelete", function(guild){ 
  
  var channel = client.channels.cache.get("815794981104386105");
  const msg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} saiu de um servidor.`)
    .setDescription(`**Nome: \`${guild.name}\`\nID: \`${guild.id}\`\nMembros: \`${guild.memberCount}\`\nTotal de servidores: \`${client.guilds.cache.size}\`**`)
    .setTimestamp()
  channel.send(msg);
});
