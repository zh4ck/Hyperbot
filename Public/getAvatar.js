const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'avatar',
	description: 'Mengambil Avatar atau Profile Picture user yang dituju.',
	usage: '.avatar (User)',
	aliases: ['profilepicture', 'profilepict', 'pp'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {
		
		if (!message.mentions.users.size) {
			return message.channel.send(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
		}
	
		const avatarList = message.mentions.users.map(user => {
			return `${user.username} avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});
    }
}