const Discord = require('discord.js');
const client = new Discord.Client();

const Canvas = require('canvas');

var prefix = ("lbdf ");
var uneCommande = '!poids ';
var uneCommande2 = '!ascii ';

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    client.user.setActivity("Commande : lbdf help");
    console.log("Mon BOT est Connecté");
})

client.login(process.env.TOKEN);


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});


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
            message.channel.send("Au putain, Elle est grosse \n celle la !");
        }
        message.channel.send("Ta phrase pèse :");
        message.channel.send(poids + " kg");
    
    }
    
    if (message.content.startsWith(uneCommande2)) {
    var str = message.content.substring(uneCommande2.length);
               var longueur = str.length;
               var i;

              for(i = 0; i < longueur; i++)
              {
                var index = i;
                var lettre = str.charAt(index);

                if(lettre == "A")
                {
                    message.channel.send("```  AAA  \n AA AA \nAA   AA\nAAAAAAA\nAA   AA\n```");
                }

              }
    
    }
    
    if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member);
	}
});
