
exports.run = (client, message, args) => {
  if (!['762984897014136853'].includes(message.author.id))
    return message.reply(
      "Apenas o criador do bot pode utilizar esse comando!")
  
    let vezes = 0
    message.channel.send('Envie a imagem agora (tem até 60 segundos para enviar).')
    
    const filter = m => m.attachments && m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, { time: 60000 });
    
    collector.on('collect', m => {
    
      if (m.attachments) {
      var Attachment = (m.attachments).array();
      if(!Attachment[0]) return;
      if(vezes === 1) return;
    
      let final = Attachment[0].url.endsWith(".png") || Attachment[0].url.endsWith(".jpg")
    
      if(!final) return message.channel.send('Seu arquivo tem que ser em png ou jpg')
      let link1 = Attachment[0].url;
      const imgurUploader = require('imgur-uploader');
     
      imgurUploader(link1, {title: 'Upload Shion!'}).then(data => {
            
      let image = data.link;
      client.user.setAvatar(`${image}`)
      .then(user => message.channel.send("Meu perfil foi trocado com sucesso!"))
      .catch(console.error);
      })
      }
    });
    }
