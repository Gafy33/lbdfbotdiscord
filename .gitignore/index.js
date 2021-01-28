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
    if (String.prototype.startsWith('!abc')) {
    str.substr(5);
    console.log('(1): ' + str.substr(1));  
    message.channel.sendMessage(str);
    
    
    
});
