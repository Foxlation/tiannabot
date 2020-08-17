const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR"))  if(!message.member.roles.has("740254376215707738")) return message.channel.send(`Bu Komutu Kullanmaya Yetkin Yetmiyor!`);
  let kullanıcı = message.mentions.users.first()
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('739973184560037898')  // LADİES ROL
   member.addRole('740216206039973928') // LADİES2 Rolün ID
    member.addRole('722385695800295444')
  member.removeRole('739973184962691083')   // Yeni üye Rolün ID
  member.removeRole('722385698224734208')
var sozler = ["Tianna MOD"];

  

  
  
  
 let a = new Discord.RichEmbed()
.setDescription(`${kullanıcı} **Kişisine <@&739973184560037898>,<@&740216206039973928>, rolleri verildi.**`)
.setColor('RANDOM')
 .setFooter(`${sozler[Math.floor(Math.random()) * sozler.length]}`)
message.react("743121205841887323");
    var üyesayısı = message.guild.members.size.toString().replace(/ /g, "     ");
    var üs = üyesayısı.match(/([0-9])/g);
    üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
    if (üs) {
      üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
        return {
          "1": "<a:1_:742700433533042688>",
          "2": "<a:2_:742700444597616692>",
          "3": "<a:3_:742700445629415484>",
          "4": "<a:4_:742700444781903943>",
          "5": "<a:5_:742700438993895484>",
          "6": "<a:6_:742700445776216073>",
          "7": "<a:7_:742700437798649940>",
          "8": "<a:8_:742700445281157140>",
          "9": "<a:9_:742700444694085643>",
          "0": "<a:0_:742700445226500137>"
        }[d];
      });
    }
   let kanal1 = message.guild.channels.get("742508568208474191")
    if(!kanal1) return
    kanal1.send(`**${kullanıcı} Sunucumuza kayıt oldu ve ${üyesayısı.toString()} kişi olduk!**`)

message.channel.send(a)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k","kadin"],
  kategori: "Kayıt Komutları",
  permLevel: 0
}

exports.help = {
  name: 'kadın',
  description: " Canberk Kodlama Şirketi ",
  usage: 'erkek'
}