const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 if (!message.member.roles.get("742520028674523166"))

    return message.channel.send(
      `Bu Komutu Kullancak Yetkin Yok.`
    );

  let member = message.mentions.members.first();
  if (!member) return message.reply("Birisi Etiketle!");

  let isim = args[1];
  if (!isim) return message.reply("Bir İsim Yazmalısın!");

  let yaş = args[2];

  member.setNickname(`〤 ${isim} | ${yaş}`);
  message.react("683260559226830858");

  const embed = new Discord.RichEmbed()
    .setDescription(`Kullanıcı ismi, ayarlandı.`)
    .setFooter("Tianna MOD")
    .setColor(`RANDOM`)
  message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim","i", "n"],
  permLevel: 0
};

exports.help = {
  name: "nick",
  description: "Birinin nickini değiştirir.",
  usage: "nick <yeni nick>"
};