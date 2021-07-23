const discord = require("discord.js")
const button = require("discord-buttons")
const disbut = require("discord-buttons");


module.exports = {
  name: 'help pro js bot (sla como chama k)',
  run : async(client, message, args) => {

    const member = message.member

    let button1 = new button.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new button.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new button.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new button.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new button.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new button.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")


    let row1 = new button.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new button.MessageActionRow()
    .addComponent(button6)

    const embed = new discord.MessageEmbed()
    .setTitle("Central de Comandos")
    .setColor("#00000")
    .setDescription(`
    ╭━─━─━─━─╯╰─━─━─━─━╮
     
<a:BP_setas_gif:859464516382097418> » Olá eu sou o JSscript BOT, 
      sou feito para ajudar na
      moderacao, staff, diversao e
      sistema do servidor, espero
      te ajudar :D um grande abraco.
      
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

    <a:BP_setas_gif:859464516382097418>  » Links:
      
     <:dwn_bot_add:859459360371769354> » Me adicione:
          [invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)
      
     <a:yang_server:855292568741216276> » Servidor suporte:
          [suporte](https://discord.gg/tk8rJGQAdD)
      
    <a:Neon_Youtube:859459682081832970>  » Canal do criador:
          [canal](https://youtube.com/c/gustavo360yt)
      
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

 <a:BP_setas_gif:859464516382097418> » Comandos:
      Para cada commando e so reajir
      as reacoes abaixo:
      
     📃 » Moderação
     
     🥳 » Diversão
    
     📁 » Informação
     
     🔧 » Utilidade 
     
     🎶 » Musica
     
     🔙 » Voltar
     
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

 <a:BP_setas_gif:859464516382097418> » Comandos status:
 
  __****Todos podem usar: $
  Apenas developers: </>
  Precissa marcar: @
  Necessita de permisao: ~****__
 
╰━─━─━─━─╮╭─━─━─━─━╯

`)
.setImage(`https://cdn.discordapp.com/attachments/829845865371140146/841345247975047208/20210510_125619.jpg`) 
.setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    message.channel.send({
      embed: embed,
      components: [row1 , row2]
    }).then(message => {
      const filter = (button) => button.clicker.user.id === member.id
      const collector = message.createButtonCollector(filter)

      collector.on('collect', (button) => {

  if (button.id === "button1") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Moderacao")
    .setColor("#00000")
    .setDescription(`
      ╭━─━─━─━─╯╰─━─━─━─━╮
       Banir um usuario:
       » j!ban
       Desbanir um usuario:
       » j!unban
       Avatar de um usuario:
       » j!avatar
       Bot falar:
       » j!say
       Avisar um usuario: <warn>
       » j!aviso
       Expulssar um usuario:
       » j!expulssar
       Trancar um canal:
       » j!lock
       Destrancar um canal:
       » j!unlock
╰━─━─━─━─╮╭─━─━─━─━╯
`)
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  } else if (button.id === "button2") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Diversao")
    .setColor("#00000")
    .setDescription(`
      ╭━─━─━─━─╯╰─━─━─━─━╮
        Beijar alguem:
        » j!kiss
        Dar like em um usuario:
        » j!like
        Ver a lista de likes de um usuario:
        » j!like_list
        Jogar pedra, papel, tesoura, com o bot:
        » j!jokempo
        Jogar cara ou coroa com o bot:
        » j!coinflip
        Conquista mcpe:
        » j!conquista 
        Abracar alguem:
        » j!hug
╰━─━─━─━─╮╭─━─━─━─━╯
`)
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  } else if (button.id === "button3") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Informacao")
    .setColor("#00000")
    .setDescription(`
      ╭━─━─━─━─╯╰─━─━─━─━╮
       Informacoes do bot:
       » j!botinfo
       Informacoes do servidor:
       » j!serverinfo
       Informacoes de um usuario:
       » j!userinfo
╰━─━─━─━─╮╭─━─━─━─━╯
`)
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  } else if (button.id === "button4") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Ultilidade")
    .setColor("#00000")
    .setDescription(`
      ╭━─━─━─━─╯╰─━─━─━─━╮
        Sortear:
        » j!sorteio
        Abrir um ticket:
        » j!ticket
        Fechar um ticket:
        » j!fechar
        Dar uma sugestao:
        » j!sugestao
╰━─━─━─━─╮╭─━─━─━─━╯
`)
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  } else if (button.id === "button5") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Musica")
    .setColor("#00000")
    .setDescription(`
      ╭━─━─━─━─╯╰─━─━─━─━╮
        Reproduzir:
        » j!play
        Pausar:
        » j!pause
        Continuar:
        » j!resume
        Pular:
        » j!skip
        Ver lista de musica:
        » j!lista
        Parar reprodusao:
        » j!leave
        Aumentar/Diminuir volume:
        » j!volume
        
        Testes: (Beta)
        pelos meus testes(Beta) o bot tem volume ate 1000 sem travar com apenas fones com fio bons se for um fone +/- ate volume 30 e um fone sem fio ou qualquer outro abaixo e so ate 10
╰━─━─━─━─╮╭─━─━─━─━╯
`)
    
    .setColor("#00000")    
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  } else if (button.id === "button6") {
    button.reply.defer()

    let button1 = new disbut.MessageButton()
    .setEmoji("📃")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("🥳")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("📁")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("🔧")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("🎶")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("🔙")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Central de Comandos")
    .setColor("#00000")
    .setDescription(`
    ╭━─━─━─━─╯╰─━─━─━─━╮
     
<a:BP_setas_gif:859464516382097418> » Olá eu sou o JSscript BOT, 
      sou feito para ajudar na
      moderacao, staff, diversao e
      sistema do servidor, espero
      te ajudar :D um grande abraco.
      
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

    <a:BP_setas_gif:859464516382097418>  » Links:
      
     <:dwn_bot_add:859459360371769354> » Me adicione:
          [invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)
      
     <a:yang_server:855292568741216276> » Servidor suporte:
          [suporte](https://discord.gg/tk8rJGQAdD)
      
    <a:Neon_Youtube:859459682081832970>  » Canal do criador:
          [canal](https://youtube.com/c/gustavo360yt)
      
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

 <a:BP_setas_gif:859464516382097418> » Comandos:
      Para cada commando e so reajir
      as reacoes abaixo:
      
     📃 » Moderação
     
     🥳 » Diversão
    
     📁 » Informação
     
     🔧 » Utilidade 
     
     🎶 » Musica
     
     🔙 » Voltar
     
 ╰━─━─━─━─╮╭─━─━─━─━╯
 ╭━─━─━─━─╯╰─━─━─━─━╮

 <a:BP_setas_gif:859464516382097418> » Comandos status:
 
  __****Todos podem usar: $
  Apenas developers: </>
  Precissa marcar: @
  Necessita de permisao: ~****__
 
╰━─━─━─━─╮╭─━─━─━─━╯

`)
.setImage(`https://cdn.discordapp.com/attachments/829845865371140146/841345247975047208/20210510_125619.jpg`)
    .setFooter("Criado por ϟ Lunar dev ϟ | 🍻#0001 ")

. setTimestamp(new Date)

    let row1 = new disbut.MessageActionRow()
     .addComponent(button1)
     .addComponent(button2)
     .addComponent(button3)
     .addComponent(button4)
     .addComponent(button5)
    
    let row2 = new disbut.MessageActionRow()
    .addComponent(button6)

    button.message.edit({
      embed: embed,
      components: [row1 , row2]
    })
  }
})
})
  }
} 