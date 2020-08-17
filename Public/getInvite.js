const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'invite',
	description: 'Memberikan user perma-link server ini',
	usage: '.invite',
	aliases: ['link', 'permalink', 'inv', 'serverinv', 'invitelink'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {
		message.channel.send(`Hai ${message.author}! Ini adalah perma-link server ini: http://discord.gg/AZyu2NC`)
    }
}