const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("lbdf ");


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setActivity("Commande : lbdf help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);

client.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.send("Commandes : \n lbdf dim");
    }
    
    if(message.content === prefix + "dim"){
        message.channel.sendMessages("Dimitry est le plus beau mais le plus nul à rocket league");
    }
    
});
