const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("lbdf ");
var uneCommande = '!poids ';

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setActivity("Commande : lbdf help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content.startsWith(uneCommande)) {
    var str = message.content.substring(uneCommande.length);
               var longueur = str.length;
               var i;
               var poids = 0;

              for(i = 0; i < longueur; i++)
              {
                var index = i;
                var lettre = str.charAt(index);

                if(lettre == "a" ||lettre == "e" || lettre == "i" || lettre == "o" || lettre == "u" || lettre == "y")
                {
                    poids = poids + 1;
                } else if( lettre == "b" ||lettre == "g" || lettre == "l" || lettre == "q" || lettre == "v" )
                {
                    poids = poids + 3;
                } else if( lettre == "f" ||lettre == "k" || lettre == "p" || lettre == "t" || lettre == "z" )
                {
                    poids = poids + 2
                } else if( lettre == "c" ||lettre == "h" || lettre == "m" || lettre == "r" || lettre == "w" )
                {
                    poids = poids + ( i - 1 );
                } else if( lettre == "d" ||lettre == "j" || lettre == "n" || lettre == "s" || lettre == "x" )
                {
                    poids = poids -1 ;
                } 

              }
        if(poids > 999){
            message.channel.send("Au putain, Elle est grosse celle la !");
        }
        message.channel.send("Ta phrase pèse :");
        message.channel.send(poids + " kg");
    
    }
    
    
});
