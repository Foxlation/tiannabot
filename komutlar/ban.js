const Discord = require('discord.js');

var banlar = {};
exports.run = async(yashinu, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))  if(!message.member.roles.has("743176358506659931")) return message.channel.send(`Bu Komutu Kullanmaya Yetkin Yetmiyor!`);
  if (!message.mentions.members.first()) return message.reply(`Bir üyeyi etiketlemelisin!`);
  if (!args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "")) return message.reply(`Bir sebep belirtmelisin!`);
  var logKanali = "740244336452698164"; // BURAYA LOG KANALININ ID
  var banLimit = 150; // BURAYA BAN LİMİTİ
  var filter = msj => msj.author.id === message.author.id && msj.author.id !== yashinu.user.id;
  if (message.mentions.members.size > 1) {
    let mesaj = await message.channel.send(new Discord.RichEmbed().setDescription(`${message.mentions.members.array().join(', ')} üyelerini yasaklamakta emin misiniz? (evet/hayır)`));
    message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
      if(collected.first().content.toLowerCase() === "hayır") return mesaj.edit(new Discord.RichEmbed().setDescription(`İşlem başarıyla iptal edildi!`));
      if(collected.first().content.toLowerCase() === "evet") {
        let sebep = args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "");
        message.mentions.members.forEach(async uye => {
          if (banlar[message.author.id] > banLimit) return message.reply('Ban limitini doldurdun (10)');
          if (uye.id === message.author.id) return message.reply(`Kendini yasaklayacak kadar sorunlu musun?`);
          if (uye.highestRole.position >= message.member.highestRole.position) return message.reply(`Yasaklamaya çalıştığın ${uye} üyesi senden yetkili!`);
          if (!uye.bannable) return message.channel.send(new Discord.RichEmbed().setDescription(`${uye} üyesini yasaklamaya yetkim yetmiyor!`));
          await message.guild.ban(uye.id, { reason: sebep });
          banlar[message.author.id] = banlar[message.author.id] ? banlar[message.author.id]+1 : 1;
          setTimeout(() => {
            banlar[message.author.id] = banlar[message.author.id]-1;
          }, 10*60*1000)
        });
        mesaj.edit(new Discord.RichEmbed().setImage('https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif').setDescription(`${message.mentions.members.filter(a => !message.guild.members.has(a.id)).array().join(', ')} kullanıcılar, ${message.author} tarafından **${sebep}** sebebiyle yasaklandı!`));
        yashinu.channels.get(logKanali).send(new Discord.RichEmbed().setTimestamp().setImage('https://cdn.discordapp.com/attachments/660894924664864878/660895579349581864/kod_icin.gif').setDescription(`${message.mentions.members.filter(a => !message.guild.members.has(a.id)).array().join(', ')} üyeleri ${message.author} tarafından **${sebep}** nedeniyle yasaklandı!`));
      };
    });
  } else {
    let uyemiz = message.mentions.members.first();
    let mesaj = await message.channel.send(new Discord.RichEmbed().setDescription(`${uyemiz} üyesini yasaklamakta emin misin? (evet/hayır)`));
    message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(async collected => {
      if(collected.first().content.toLowerCase() === "hayır") return mesaj.edit(new Discord.RichEmbed().setDescription(`İşlem başarıyla iptal edildi!`));
      if(collected.first().content.toLowerCase() === "evet") {
        if (banlar[message.author.id] > banLimit) return message.reply('Ban limitini doldurdun (10)');
        let sebep = args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "");
        if (uyemiz.id === message.author.id) return mesaj.edit(new Discord.RichEmbed().setDescription(`Kendini yasaklayacak kadar sorunlu musun?`));
        if (uyemiz.highestRole.position >= message.member.highestRole.position) return mesaj.edit(new Discord.RichEmbed().setDescription(`Yasaklamaya çalıştığın ${uyemiz} üyesi senden yetkili!`));
        if (!uyemiz.bannable) return mesaj.edit(new Discord.RichEmbed().setDescription(`${uyemiz} üyesini yasaklamaya yetkim yetmiyor!`));
        await message.guild.ban(uyemiz.id, { reason: sebep });
        banlar[message.author.id] = banlar[message.author.id] ? banlar[message.author.id]+1 : 1;
          setTimeout(() => {
            banlar[message.author.id] = banlar[message.author.id]-1;
          }, 10*60*1000)
        mesaj.edit(new Discord.RichEmbed().setImage('https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif').setDescription(`${uyemiz} adlı kullanıcı, ${message.author} tarafından **${sebep}** sebebiyle yasaklandı!`));
        yashinu.channels.get(logKanali).send(new Discord.RichEmbed().setTimestamp().setImage('https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif').setDescription(`${uyemiz} üyesi ${message.author} tarafından **${sebep}** nedeniyle yasaklandı!`));
      };
    });
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  permLevel: 0
};

exports.help = { 
  name: 'ban', 
  description: 'Yasaklamanızı sağlar. (Birden fazla yasaklayabilirsiniz)',
  usage: 'ban @kullanıcılar sebep',
  kategori: 'yetkili'
};