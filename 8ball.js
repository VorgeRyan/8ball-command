let Discord = require('discord.js');

exports.run = (client, message) => {


var list = [
    'It is certain',
     'Maybe No?',
     'No You!',
    'What Do You Think?',
    'Srsly?',
    'Nah',
    'Hmmmmmmmmmmmm?',
    'Nup',
    'Do You Think Im Stupid?',
    'noooooooooooo it is not',
    'i cant',
    'Come Ask Later Plz Im Tired',
    'Come Ask Later',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];

var rand = Math.floor(Math.random() * list.length);


var embed = new Discord.RichEmbed()
.setTitle('**8ball Question**')
.addField("**Bot Replies :**", list[rand])
.setColor("RANDOM")

message.channel.send(embed)

}
module.exports.help = {
	name: "8ball",
	alias: "8b"
}
