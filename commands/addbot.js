
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'addbot',
    aliases: ['buenokkkk', ],
    run: async (client, message, args) => {

        let canalenviarsugestão = db.get(`852159195376517140_${message.guild.id}`)
        let canalrecebersugestão = db.get(`852159195376517140_${message.guild.id}`)

        let nid = new Discord.MessageEmbed()
        .setTitle(':loading: LINK PARA ADICIONAR!')
        .setColor('#00FFFF')

        let motivo = new  Discord.MessageEmbed()
        .setTitle(':loading: ID do BOT')
        
        .setColor('#00FFFF')
        
        
        .setColor('#00FFFF')

        let provas = new  Discord.MessageEmbed()
        .setTitle(':loading: Prefixo!')
        .setColor('#00ffff')

        if(message.channel.id !== 852159195376517140) return message.reply("Não pode utilizar este comando neste \`chat!\`").then(msg => msg.delete({timeout: 5000}))
        message.author.send(nid).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nid = c.content

                message.author.send(motivo).then(a => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const motivo = c.content

                        message.author.send(provas).then(a => {
                            let o = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                .on('collect', c => {
                                    const provas = c.content
                                    message.delete()

                                    let sugestões = new Discord.MessageEmbed()
                                        .setColor('#00FFFF')
                                        .setTitle('Seu BOT foi enviado!!')
                                        .addField(':certao: Aguarde algum verificador olhar!', message.author)
                                        .setTimestamp()
                                        .setFooter('Sistema | Aqua Sama')
                                        client.channels.cache.get(canalenviarsugestão).send(sugestões)

                                    let sugestão2 = new Discord.MessageEmbed()
                                        .setColor('#00FFFF')
                                        .setTitle(':verifyblue: | Novo BOT logado')
                                        .addField(':setacolo: | Desenvolvedor:',message.author)
                                        .addField(':setacolo:  | Link Para Adicionar :', nid)
                                        .addField(':setacolo:   | ID do BOT:', motivo)
                                        .addField(':setacolo: | Prefixo |', provas)
                                        
                                        .setFooter('Sistema da AquaSama')
                                        .setTimestamp()
                                        client.channels.cache.get(canalrecebersugestão).send(sugestão2)

    
                            })
                        })
                    })
                })
            })
        })
    }
}
