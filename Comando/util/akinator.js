//=====Módulos
const Discord = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports = {
    name: "akinator",
    description: "[ 😀 everyone ] Iniciar o jogo do Akinator.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "tipo",
            description: "Escolha o tipo de questionário.",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: "Personagem",
                    value: "Character",
                },
                {
                    name: "Animal",
                    value: "Animal",
                },
                {
                    name: "Objeto",
                    value: "Object",
                }
            ]
        },
    ],


    run: async (client, interaction) => {
        const user = await interaction.options.getUser('user') || interaction.user;
        const member = interaction.guild.members.cache.get(user.id);
        const tipo = interaction.options.getString("tipo")

        const msg = await interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle(`😀 - Clique em "iniciar"`)
                    .addFields(
                        {
                            name: "🔍 - Tipo:",
                            value: `\`${tipo}\``,
                            inline: true
                        }
                    )
                    .setColor("Red")
                    .setImage("https://bk.ibxk.com.br/2014/3/programas/10567873.png")
            ], components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("ako")
                            .setEmoji("🗺")
                            .setLabel(" - INICIAR")
                            .setStyle(Discord.ButtonStyle.Primary),
                    )]
        })

        const collector = msg.createMessageComponentCollector()

        collector.on("collect", async (i) => {

            if (i.customId == 'ako') {

                if (i.user.id != interaction.user.id)
                    return i.reply({ content: `**❌ - Você não é o autor do comando!**`, ephemeral: true })

                i.deferUpdate()

                const language = "pt";
                const childMode = true;
                const gameType = tipo; //("animal", "character" ou "object")
                const useButtons = true;
                const embedColor = "Yellow";

                akinator(i, {
                    language: language, // Default para "en"
                    childMode: childMode, // Default para "false"
                    gameType: gameType, // Defaults para "character"
                    useButtons: useButtons, // Default para "false"
                    embedColor: embedColor // Default para "Random"
                });

            };
        });
    }
}
