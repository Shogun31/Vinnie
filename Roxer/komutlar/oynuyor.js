const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '690246117115297799') return message.reply('Yetkin Yok Kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oynuyor',
  description: 'Botun pingini gösterir.',
  usage: 'oynuyor'
};