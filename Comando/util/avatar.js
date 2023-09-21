//======Módulos
const { ActionRowBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Veja o avatar de algum usuario",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "Menção ou ID do usuario",
            type: Discord.ApplicationCommandOptionType.User,
            require: true,
        }
    ],
    run: async (client, interaction) => {
        let userAvatar = interaction.options.getUser("user")
        let Avatarinfo = userAvatar.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })

        let ryan = new Discord.EmbedBuilder()
            .setColor("#2f3136")
            .setTitle(`Avatar de ${userAvatar.username}`)
            .setImage(Avatarinfo)
            .setFooter({ text: 'By BDarkBR' })
        
        let download = new ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Download do avatar")
                .setStyle(Discord.ButtonStyle.Link)
                .setURL(Avatarinfo)
            .setEmoji("📩")
        )
        
        interaction.reply({ embeds: [ryan], components: [download] })
    }
}
