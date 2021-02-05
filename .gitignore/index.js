const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("lbdf ");
const uneCommande = '!abc ';

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setActivity("Commande : lbdf help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);

client.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.send("Commandes : \n lbdf tristan");
    }
    
    if(message.content === prefix + "tristan"){
        message.channel.send("tristan c'est le plus beau de tous les gens présent sur cette terre \n ");
    }

    if (message.content.startsWith(uneCommande)) {
    const str = message.content.substring(uneCommande.length)
    message.channel.sendMessage(str)
    }
    });
    
    
    
});
