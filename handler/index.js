//=====Módulos
const fs = require("fs")

//Estrutura da handler
module.exports = async (client) => {
    const SlashsArray = []
    fs.readdir(`./Comando`, (error, folder) => {
        folder.forEach(subfolder => {
            fs.readdir(`./Comando/${subfolder}/`, (error, files) => {
                files.forEach(files => {
                    if (!files?.endsWith('.js')) return;
                    files = require(`../Comando/${subfolder}/${files}`);
                    if (!files?.name) return;
                    client.slashCommands.set(files?.name, files);
                    SlashsArray.push(files)
                });
            });
        });
    });
    client.on("ready", async () => {
        client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    });
};