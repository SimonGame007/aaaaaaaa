const discord = require("discord.js")
const button = require("discord-buttons")
const disbut = require("discord-buttons");


module.exports = {
  name: 'help pro js bot (sla como chama k)',
  run : async(client, message, args) => {

    const member = message.member

    let button1 = new button.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new button.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new button.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new button.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new button.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new button.MessageButton()
    .setEmoji("๐")
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
    โญโโโโโโโโโฏโฐโโโโโโโโโฎ
     
<a:BP_setas_gif:859464516382097418> ยป Olรก eu sou o JSscript BOT, 
      sou feito para ajudar na
      moderacao, staff, diversao e
      sistema do servidor, espero
      te ajudar :D um grande abraco.
      
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

    <a:BP_setas_gif:859464516382097418>  ยป Links:
      
     <:dwn_bot_add:859459360371769354> ยป Me adicione:
          [invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)
      
     <a:yang_server:855292568741216276> ยป Servidor suporte:
          [suporte](https://discord.gg/tk8rJGQAdD)
      
    <a:Neon_Youtube:859459682081832970>  ยป Canal do criador:
          [canal](https://youtube.com/c/gustavo360yt)
      
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

 <a:BP_setas_gif:859464516382097418> ยป Comandos:
      Para cada commando e so reajir
      as reacoes abaixo:
      
     ๐ ยป Moderaรงรฃo
     
     ๐ฅณ ยป Diversรฃo
    
     ๐ ยป Informaรงรฃo
     
     ๐ง ยป Utilidade 
     
     ๐ถ ยป Musica
     
     ๐ ยป Voltar
     
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

 <a:BP_setas_gif:859464516382097418> ยป Comandos status:
 
  __****Todos podem usar: $
  Apenas developers: </>
  Precissa marcar: @
  Necessita de permisao: ~****__
 
โฐโโโโโโโโโฎโญโโโโโโโโโฏ

`)
.setImage(`https://cdn.discordapp.com/attachments/829845865371140146/841345247975047208/20210510_125619.jpg`) 
.setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Moderacao")
    .setColor("#00000")
    .setDescription(`
      โญโโโโโโโโโฏโฐโโโโโโโโโฎ
       Banir um usuario:
       ยป j!ban
       Desbanir um usuario:
       ยป j!unban
       Avatar de um usuario:
       ยป j!avatar
       Bot falar:
       ยป j!say
       Avisar um usuario: <warn>
       ยป j!aviso
       Expulssar um usuario:
       ยป j!expulssar
       Trancar um canal:
       ยป j!lock
       Destrancar um canal:
       ยป j!unlock
โฐโโโโโโโโโฎโญโโโโโโโโโฏ
`)
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Diversao")
    .setColor("#00000")
    .setDescription(`
      โญโโโโโโโโโฏโฐโโโโโโโโโฎ
        Beijar alguem:
        ยป j!kiss
        Dar like em um usuario:
        ยป j!like
        Ver a lista de likes de um usuario:
        ยป j!like_list
        Jogar pedra, papel, tesoura, com o bot:
        ยป j!jokempo
        Jogar cara ou coroa com o bot:
        ยป j!coinflip
        Conquista mcpe:
        ยป j!conquista 
        Abracar alguem:
        ยป j!hug
โฐโโโโโโโโโฎโญโโโโโโโโโฏ
`)
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Informacao")
    .setColor("#00000")
    .setDescription(`
      โญโโโโโโโโโฏโฐโโโโโโโโโฎ
       Informacoes do bot:
       ยป j!botinfo
       Informacoes do servidor:
       ยป j!serverinfo
       Informacoes de um usuario:
       ยป j!userinfo
โฐโโโโโโโโโฎโญโโโโโโโโโฏ
`)
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Ultilidade")
    .setColor("#00000")
    .setDescription(`
      โญโโโโโโโโโฏโฐโโโโโโโโโฎ
        Sortear:
        ยป j!sorteio
        Abrir um ticket:
        ยป j!ticket
        Fechar um ticket:
        ยป j!fechar
        Dar uma sugestao:
        ยป j!sugestao
โฐโโโโโโโโโฎโญโโโโโโโโโฏ
`)
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Musica")
    .setColor("#00000")
    .setDescription(`
      โญโโโโโโโโโฏโฐโโโโโโโโโฎ
        Reproduzir:
        ยป j!play
        Pausar:
        ยป j!pause
        Continuar:
        ยป j!resume
        Pular:
        ยป j!skip
        Ver lista de musica:
        ยป j!lista
        Parar reprodusao:
        ยป j!leave
        Aumentar/Diminuir volume:
        ยป j!volume
        
        Testes: (Beta)
        pelos meus testes(Beta) o bot tem volume ate 1000 sem travar com apenas fones com fio bons se for um fone +/- ate volume 30 e um fone sem fio ou qualquer outro abaixo e so ate 10
โฐโโโโโโโโโฎโญโโโโโโโโโฏ
`)
    
    .setColor("#00000")    
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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
    .setEmoji("๐")
    .setStyle("red")
    .setID("button1")

    let button2 = new disbut.MessageButton()
    .setEmoji("๐ฅณ")
    .setStyle("red")
    .setID("button2")

    let button3 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button3")

    let button4 = new disbut.MessageButton()
    .setEmoji("๐ง")
    .setStyle("red")
    .setID("button4")

    let button5 = new disbut.MessageButton()
    .setEmoji("๐ถ")
    .setStyle("red")
    .setID("button5")

    let button6 = new disbut.MessageButton()
    .setEmoji("๐")
    .setStyle("red")
    .setID("button6")

    const embed = new discord.MessageEmbed()
    .setTitle("Central de Comandos")
    .setColor("#00000")
    .setDescription(`
    โญโโโโโโโโโฏโฐโโโโโโโโโฎ
     
<a:BP_setas_gif:859464516382097418> ยป Olรก eu sou o JSscript BOT, 
      sou feito para ajudar na
      moderacao, staff, diversao e
      sistema do servidor, espero
      te ajudar :D um grande abraco.
      
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

    <a:BP_setas_gif:859464516382097418>  ยป Links:
      
     <:dwn_bot_add:859459360371769354> ยป Me adicione:
          [invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)
      
     <a:yang_server:855292568741216276> ยป Servidor suporte:
          [suporte](https://discord.gg/tk8rJGQAdD)
      
    <a:Neon_Youtube:859459682081832970>  ยป Canal do criador:
          [canal](https://youtube.com/c/gustavo360yt)
      
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

 <a:BP_setas_gif:859464516382097418> ยป Comandos:
      Para cada commando e so reajir
      as reacoes abaixo:
      
     ๐ ยป Moderaรงรฃo
     
     ๐ฅณ ยป Diversรฃo
    
     ๐ ยป Informaรงรฃo
     
     ๐ง ยป Utilidade 
     
     ๐ถ ยป Musica
     
     ๐ ยป Voltar
     
 โฐโโโโโโโโโฎโญโโโโโโโโโฏ
 โญโโโโโโโโโฏโฐโโโโโโโโโฎ

 <a:BP_setas_gif:859464516382097418> ยป Comandos status:
 
  __****Todos podem usar: $
  Apenas developers: </>
  Precissa marcar: @
  Necessita de permisao: ~****__
 
โฐโโโโโโโโโฎโญโโโโโโโโโฏ

`)
.setImage(`https://cdn.discordapp.com/attachments/829845865371140146/841345247975047208/20210510_125619.jpg`)
    .setFooter("Criado por ฯ Lunar dev ฯ | ๐ป#0001 ")

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