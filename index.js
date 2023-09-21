//======Módulos
const Discord = require("discord.js");

//=====Pastas & Config
const config = require("./configs/config.json");

//=====Definição do Client
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
})

module.exports = client

//=====Eventos
client.on('ready', () => {
    console.log(`🔥 Estou online em ${client.user.username}!`)
})

client.on('interactionCreate', (interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.reply(`Error`);
        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction)
    }
})

client.slashCommands = new Discord.Collection()
require('./handler')(client)

//=====Iniciar o bot
client.login(config.token)

