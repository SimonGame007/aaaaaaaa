const Discord = require('discord.js')
const button = require('discord-buttons')

exports.run = async(bot, message, args) => {

let button1 = new button.MessageButton()
          .setLabel("clear")
          .setID("button1")
          .setStyle("red")

let button2 = new button.MessageButton()
          .setLabel("(")
          .setID("button2")
          .setStyle("blurple")

let button3 = new button.MessageButton()
          .setLabel(")")
          .setID("button3")
          .setStyle("blurple")

let button4 = new button.MessageButton()
          .setLabel("/")
          .setID("button4")
          .setStyle("blurple")
           
let button5 = new button.MessageButton()   
          .setLabel("7")
          .setID("button5")
          .setStyle("gray")

let button6 = new button.MessageButton()
          .setLabel("6")
          .setID("button6")
          .setStyle("gray")

let row1 = new button.MessageActionRow()
      .addComponent(button1)
      .addComponent(button2)
      .addComponent(button3)
      .addComponent(button4)
      .addComponent(button5)

let row2 = new button.MessageActionsRow()
     .addComponent(button6)
     
const embed = new discord.MessagsEmbed()
       .setDescription("```0```")

 message.channel.send(embed, {components: [row1, row2]})
 
}

//cores que suporta blurple, gray, green e red 
               