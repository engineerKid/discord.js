const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', msg => {

    // prevents it from reacting to other bots
    if (msg.author.bot) {
        return;
    }


    // null returns

     if (msg.content.includes('yourself')) {     
        return null;   
    } 

    if (msg.content.includes('yours')) {     
        return null;   
    } 

    if (msg.content.includes('yourselves')) {     
        return null;   
    } 

    if (msg.content.includes('yourn')) {     
        return null;   
    } 

    if (msg.content.includes('youre')) {     
        return null;   
    } 


    // corrections
    if (msg.content.toLowerCase().includes('your')) {     
        msg.channel.send("*you're");   
    }
    


    //rng
    if (msg.content === `c?generate`) {
    var random = Math.random() * 100
    var num = Math.floor(random)
      msg.channel.send(num);
    }

    //ok
    if (msg.content === 'ok') {     
    msg.channel.send("https://media.discordapp.net/attachments/604407073156890637/798247049157017651/image0.gif");   
    }

    //help
    var help = ["**your** - makes cacc bot say *you're", "**c?rng** - makes cacc bot randomly generate a number from 1-100", "**ok** - makes cacc bot paste the ok keyboard rage gif", "**c?help** - this"]
    if (msg.content === 'c?help') {     
        msg.channel.send(help);   
        }

    // null bypass


    
})


client.login('ODA1NTczMDc2MDA3MjU2MDY0.YBc2ZA.waAg57JN--lkJFSdG-wj8iM_xu8');