const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('**Aleyküm Selam, Hoşgeldin.**')
    msg.react(`743121205841887323`)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.channel.sendMessage('**Aleyküm Selam Hoşgeldin.**')
    msg.react(`743121205841887323`)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '.tag') {
    msg.channel.sendMessage('**〤**')
    msg.react(`743121205841887323`)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '!tag') {
    msg.channel.sendMessage('**〤**')
    msg.react(`743121205841887323`)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tag') {
    msg.channel.sendMessage('**〤**')
    msg.react(`743121205841887323`)
  }
});

client.on("guildMemberAdd", async member => {
  let member2 = member.user;
  let zaman = new Date().getTime() - member2.createdAt.getTime();
  var user = member2;
  var cfxzaman = [];
  if (zaman < 604800000) {
    cfxzaman = "Şüpheli Bir Kullanıcı!";
  } else {
    cfxzaman = "Güvenli Bir Kullanıcı";
  }
  require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime();
  const gecen = moment
    .duration(zaman1)
    .format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`);
  let dbayarfalanfilan = await db.fetch(`cfxdbayar${member.guild.id}`);
  let message = member.guild.channels.find(x => x.id === dbayarfalanfilan);
  const bergy = new Discord.RichEmbed()
    .setColor("RANDOM")
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
     message.send(
     `${client.emojis.get("743780564359970816")} **Hoşgeldin, ${member} seninle beraber ${üyesayısı.toString()} kişiyiz!** \n \n${client.emojis.get("705797595393556652")} **Kayıt olabilmek için, V.Confirmed odalarından birine girmelisin! **\n \n${client.emojis.get("742520425174794302")} **<@&742520028674523166> Rolünde ki arkadaşlar seninle ilgilenecektir.**\n \n${client.emojis.get("742520414315479061")} **Bu hesap ${gecen} önce açılmış.**`,new Discord.Attachment('https://media.giphy.com/media/l1xnopzGG5oPvE2HPq/giphy-downsized-large.gif'))
}) 
client.on("message", async message => {
  if (message.content === "742508568208474192") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});


client.on("userUpdate", async(old, nev) => {
  if(old.username !== nev.username) {
  if(!nev.username.includes("〤") && client.guilds.get("742701444305780736").members.get(nev.id).roles.has("742701444305780736")) {
     client.guilds.get("742701444305780736").members.get(nev.id).removeRole("742701444305780736")
     client.channels.get('742701444305780736').send(`**${nev}, "〤" tagını çıkardı ve ailemize VEDA etti!** \n **Görüşürüz..**`)
nev.setNickname(`〤 ${old.Nickname}`)
    } 
     if(nev.username.includes("〤") && !client.guilds.get("742701444305780736").members.get(nev.id).roles.has("742701444305780736")) {
      client.channels.get('742701444305780736').send(`** ${nev}, "〤" Tagını Aldı Ve Riealast Ailemize Katıldı!** \n **Bizimle Olduğun İçin Teşşekürler!**`) 
    client.guilds.get("742701444305780736").members.get(nev.id).addRole("742701444305780736")
       nev.setNickname(`${old.user.username}`) 
     }
  }
  })
////Developed By 
client.on("userUpdate", async(oldCAD, newCAD) => {
  if(oldCAD.avatarURL === newCAD.avatarURL) return;
  let cadNORMAL = "740244988817834078"; // Normal PP'lerin Atılacağı Kanal ID'si
  let cadGIF = "740244988817834078"; // Gif PP'lerin Atılacağı Kanal ID'si
  let cadPP = (newCAD.avatarURL).split("?")[0];
  if((cadPP).endsWith(".gif")) {
    client.channels.get(cadGIF).send(new Discord.Attachment(cadPP));
  } else {
    client.channels.get(cadNORMAL).send(new Discord.Attachment(cadPP));
  };
});

client.on('messageDelete', async message   => {
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === "743127840270319626");    
if (!modlogkanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
.setDescription(`<@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi! Silinen Mesaj: **${message.content}**`)
  modlogkanal.sendEmbed(embed);
  })

client.on("guildMemberAdd", member => {
  var rol = member.guild.roles.get("742509040814260264")
   member.addRole(rol)
   })
//ototag
client.on("userUpdate", async (yashinu, yeni) => {
  var sunucu = client.guilds.get('650431759997206548'); // Buraya Sunucu ID
  var uye = sunucu.members.get(yeni.id);
  var normalTag = "〤"; // Buraya Normal Tag (Yoksa boş bırakın)
  var ekipTag = "〤"; // Buraya Ekip Tag
  var ekipRolü = "742701444305780736"; // Buraya Ekip Rolünün ID
  var logKanali = "713420761917947934"; // Loglanacağı Kanalın ID

  if (!sunucu.members.has(yeni.id) || yeni.bot || yashinu.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.has(ekipRolü)) {
    try {
      await uye.addRole(ekipRolü);
      await uye.setNickname((uye.displayName).replace(normalTag, ekipTag));
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.get(logKanali).send(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`);
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.has(ekipRolü)) {
    try {
      await uye.removeRoles(uye.roles.filter(rol => rol.position >= sunucu.roles.get(ekipRolü).position));
      await uye.setNickname((uye.displayName).replace(ekipTag, normalTag));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${ekipTag}**`);
      await client.channels.get(logKanali).send(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`);
    } catch(err) { console.error(err) };
  };
});