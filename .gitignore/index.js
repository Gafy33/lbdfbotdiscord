const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "//";


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);
