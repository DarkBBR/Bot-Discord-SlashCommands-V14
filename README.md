# Bot-Discord-SlashCommands-V14

Base para um bot de discord usando Node.JS!

# Estrutura da Handler usada
  ```js
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
```
<div>
  ~> Npms Usados
  <hr></hr>
  Discord.JS = https://www.npmjs.com/package/discord.js <br>
  Fs = https://www.npmjs.com/package/fs 
</div> 
 <hr></hr>
