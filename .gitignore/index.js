const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDI4OTMzNjkzODAyMDIwODk0.DaKzvA.ThRY85KaYC4--s4WzARXS6JDOZ0");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -> *help");
    }

    if (message.content === "Salut"){
        message.reply("Salut ! Alors ça roule ? :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Pierre est beau"){
        message.reply("tu as tout à fait raison. Il est même magnifique");
        console.log("Commande Pierre est beau effectué");
    }
});
