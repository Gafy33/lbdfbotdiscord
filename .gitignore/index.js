const Discord = require('discord.js');
const client = new Discord.Client();

const 
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
    
    if(message.content === prefix + "image"){
        get('http://lorempixel.com/400/200').then(res => {
        const cEmbed = new Discord.richEmbed()
        .setImage(res.body.file)
        message.channel.send({cEmebed})
        }                                
    }
    
    
    
});
