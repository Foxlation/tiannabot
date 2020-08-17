const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('743176349807542283') && !message.member.hasPermission('')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!') .setColor("random"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed() .setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  
  
          message.react("743121205841887323");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r)

   
  
    
    
})
  member.addRole('742509040814260264')
    member.addRole('742509040814260264')
     const kanal = message.guild.channels.find(c => c.id == "720973684382367785")
    let embed1 = new Discord.RichEmbed()
    let array = ["https://cdn.discordapp.com/attachments/719922694346506378/720984680937160714/giphy-2.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984680937160714/giphy-2.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984679938916362/giphy-4.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984679150518332/giphy-6.gif"]

const random = new Discord.Attachment(array[Math.floor(Math.random() * array.length)])
    message.channel.send(`${kullanıcı} adlı kullanıcı Kayıtsıza Atıldı.`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  
  let embed = new Discord.RichEmbed()
 .setDescription(`${kullanıcı} adlı kullanıcı ${message.author} adlı yetkili tarafından Kayıtsıza atıldı.`)

  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıtsız","registar"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'r',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
};