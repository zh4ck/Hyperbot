const Discord = require('discord.js')
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'base',
	description: 'base structure',
	usage: '<insert usage>',
	aliases: ['alias1', 'alias2'],
	allowed: 'Roles',
	guildOnly: true,
	cooldown: 'Cooldown',
	execute(message, args) {
    }
}