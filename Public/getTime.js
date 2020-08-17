const Discord = require('discord.js')
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'time',
	description: 'Memberikan waktu saat ini (WIB)',
	usage: '.time',
	aliases: ['waktu', 'jam'],
	allowed: 'Semua Roles',
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {

        if (!args.length) {
            var d = new Date();
            message.channel.send(`Hai ${message.author}! Sekarang Jam: ` + '**' + d.toLocaleTimeString() + '**');
        }
    }
}