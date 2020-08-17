const Discord = require('discord.js')
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'ping',
	description: 'Memberikan Ping kamu saat ino',
	usage: '.ping',
	aliases: ['ping', 'ms'],
	allowed: 'Semua Roles',
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {

        if (!args.length) {
            message.channel.send('Pinging.').then(sent => {
                setTimeout(function(){ 
                    sent.edit('Pinging..'); 
                }, 100);
                setTimeout(function(){
                    sent.edit('Pinging...');
                }, 1000);
                setTimeout(function(){
                    sent.edit(`**Pong!** Ping kamu: ${sent.createdTimestamp - message.createdTimestamp}ms`);
                }, 1000);
            })
        }

    }
}