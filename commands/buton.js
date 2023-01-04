const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "buton",
async execute(client, message, args) {

    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: "Bu Komutu Kullanabilmek İçin Gerekli İzinlere Sahip Değilsin", ephemeral: true});

    const arvsbed = new MessageEmbed()
    .setColor("#2f3136")
    .setFooter("Made by ❤️ ArviS#0011")
    .setImage("https://media.discordapp.net/attachments/997105193256747028/1051895712792711178/image.png")
    .setThumbnail(message.guild.iconURL())
    .setDescription(' **Rol 1** \n**Rol 2** \n**Rol 3**');

    let arv = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Rol 1")
    .setCustomId("arol1")
    .setEmoji('1058007848543584316');

    let arv1 = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Rol 2")
    .setCustomId("arol2")
    .setEmoji('1051167644205727744');

    let arv2 = new MessageButton()
    .setStyle("DANGER")
    .setLabel("Rol 3")
    .setCustomId("arol3")
    .setEmoji('1058011368701313125');

    const arvsrow = new MessageActionRow() 
    .addComponents([arv, arv1,arv2]);

    message.channel.__send({components: [arvsrow], embeds: [arvsbed] });
  }
}