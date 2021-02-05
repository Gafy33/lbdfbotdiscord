var Discord = require('discord.js');
var client = new Discord.Client();

var prefix = ("lbdf ");
var uneCommande = '!abc ';

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setActivity("Commande : lbdf help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content.startsWith(uneCommande)) {
    var str = message.content.substring(uneCommande.length)
    message.channel.sendMessage(str)
    }
    });
    
    
    
});
