const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("$");


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setGame("Commande : $help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);

client.on('message', message => {
    if(message.content === prefix + "help"){
        message.reply("Commandes : \n $dim");
    }
    
    if(message.content === prefix + "dim"){
        message.reply("Dimitry est le plus beau mais le plus nul à rocket league");
    }
    
});
