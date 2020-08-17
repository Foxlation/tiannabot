const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR"))  if(!message.member.roles.has("722385680541417522")) return message.channel.send(`Bu Komutu Kullanmaya Yetkin Yetmiyor!`);
  let kullanıcı = message.mentions.users.first()
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('722385687206166559')  // LADİES ROL
 
var sozler = ["Kimse Sana Canım Cicim Balım, Demesinn !", "Amacım kötü değil, istiyordum yardım ama dönülmez akşamların ufkunda kaldım", "kim benim düşmanım, kim senin dostun?", "insan gelir, insan geçer.", "zılacak o kadar çok şey var ki uzun olanları değil de bazen insan kısa cümleler kurmak ama karşısındakine de anlayacağı şekilde kendini anlatmak ister."];

  

  
  
  
  let a = new Discord.RichEmbed()
.setDescription(`${kullanıcı} **Kişisine <@&722385687206166559>R olü Verildi.****`)
.setColor('RANDOM')
 .setFooter(`${sozler[Math.floor(Math.random()) * sozler.length]}`)



message.channel.send(a)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Kayıt Komutları",
  permLevel: 0
}

exports.help = {
  name: 'spokesmen',
  description: " Canberk Kodlama Şirketi ",
  usage: 'erkek'
}