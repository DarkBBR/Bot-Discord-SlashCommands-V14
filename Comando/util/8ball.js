//=====Módulos
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "8ball",
    description: "Teste sua sorte",
    options: [
        {
            name: "questão",
            description: "A pergunta que você quer fazer a bola 8",
            required: true,
            type: ApplicationCommandOptionType.String,
        }
    ],
    run: async (client, interaction, args) => {

        var fortunes = [
            "Sim.",
            "É certo.",
            "É decididamente assim.",
            "Sem dúvida.",
            "sim definitivamente.",
            "Você pode contar com ele.",
            "A meu ver, sim.",
            "Provavelmente.",
            "Perspectiva boa.",
            "Sinais apontam que sim.",
            "Responder nebuloso, tente novamente.",
            "Pergunte novamente mais tarde.", "Melhor não te dizer agora...",
            "Não é possível prever agora.",
            "Concentre-se e pergunte novamente.",
            "Não conte com isso.",
            "Minha resposta é não.",
            "Minhas fontes dizem não.",
            "As perspectivas não são tão boas...",
            "Muito duvidoso.",
        ];
        await interaction.reply(
            fortunes[Math.floor(Math.random() * fortunes.length)]
        );
    },
};
