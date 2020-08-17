{
  const Discord = require("discord.js");
  const { oneLine, stripIndents } = require("common-tags");
  module.exports.run = async (client, message, args) => {
    const emoji = client.emojis.find(emoji => emoji.name === "tik");
    const emoji3 = client.emojis.find(emoji => emoji.name === "blk");
    let guild = "722372639925993554";
    if (!message.member.hasPermission("ADMINISTRATOR"))
    client.premium_subscription_count == 0;
    const voiceChannels = message.guild.channels.filter(
      c => c.type === "voice"
    );
 
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels)
      count += voiceChannel.members.size;
    var msg = message;
    var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "     ");
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
    /////////////////////////////////////
    var sessayı = count.toString().replace(/ /g, "     ");
    var üs2 = sessayı.match(/([0-9])/g);
    sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
    if (üs2) {
      sessayı = sessayı.replace(/([0-9])/g, d => {
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
    /////////////////////////////////////////
    var tagdakiler = 0;
    let tag = "†";
    message.guild.members.forEach(member => {
      if (member.user.username.includes(tag)) {
        tagdakiler = tagdakiler + 1;
      }
    });
    var tagdakilerr = tagdakiler.toString().replace(/ /g, "     ");
    var üs3 = tagdakilerr.match(/([0-9])/g);
    tagdakilerr = tagdakilerr
      .replace(/([a-zA-Z])/g, "bilinmiyor")
      .toLowerCase();
    if (üs3) {
      tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
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
    //////////////////////////////////////////
    var onlayn = message.guild.members
      .filter(m => m.presence.status !== "offline")
      .size.toString()
      .replace(/ /g, "     ");
    var üs4 = onlayn.match(/([0-9])/g);
    onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
    if (üs4) {
      onlayn = onlayn.replace(/([0-9])/g, d => {
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
    //////////////////////////////////////////////////

    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      message.channel.send(`**BlackLife Sesli: ${sessayı}**`)
      .setFooter(`Komutu Kullanan: ${msg.author.tag}  `)
      .setAuthor(msg.guild.name, msg.guild.iconURL);
    msg.channel.send(embed);
    message.react(emoji);
  };
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["Sesli"],
    permLevel: 0
  };
  exports.help = {
    name: "sesli"
  };
}
