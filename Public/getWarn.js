const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'getwarn',
	description: 'test',
	usage: 'test',
	aliases: ['alias1t', 'alias2t'],
	allowed: ('Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {
			message.channel.send('<a:blob:733667596137791578>');

    }
}