const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        
        let autor = message.author;
        let argumento = args.join(' ');
        if(!args[0]) return message.channel.send('Por favor, especifique um item para ver seu inventário!')


        if(argumento === 'pow') {
          let items = await db.fetch(`pow_${message.guild.id}_${autor.id}`)
           if(items !== null) items = 'Pow'
           if(items === null) items = 'Você não tem items!'

        const Embed = new Discord.MessageEmbed()
        .setColor('#00000')
        .addField('Inventário', items)
        .setTitle('POW')
        message.channel.send(Embed);
  } 


        if(argumento === 'teste') {
          let items = await db.fetch(`teste_${message.guild.id}_${autor.id}`);
          if(items !== null) items = 'Teste'
          if(items === null) items = 'Você não tem items!'

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('Inventário', items)
        .setTitle('TESTE')
        message.channel.send(Embed);
  }


}