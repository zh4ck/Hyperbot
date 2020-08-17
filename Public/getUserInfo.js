const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'userinfo',
	description: 'Memberikan informasi tentang akun-mu atau orang lain',
	usage: '.userinfo',
	aliases: ['infouser', 'userinf'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {
		const user = message.mentions.users.first();

		if (!args.length) {
			let UserInfo = new Discord.MessageEmbed()
			.setTitle('User Info')
			.setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setColor('GOLD')
			.setDescription(`Ini adalah informasi tentang akun-mu, gunakan **.userinfo (User)** untuk mendapatkan informasi tentang user yang dituju.\n\n**Username**: ${message.author}\n**Tag**: ${message.author.tag}\n**ID**: ${message.author.id}\n**Masuk Pada**: ${message.member.joinedAt}\n**Akun Dibuat**: ${message.author.createdAt}`)
			.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)

			return message.channel.send(UserInfo);
		} else if (user) {
			let UserInfo = new Discord.MessageEmbed()
			.setTitle('User Info')
			.setThumbnail(`${user.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setColor('GOLD')
			.setDescription(`Ini adalah informasi tentang akun-mu, gunakan **.userinfo (User)** untuk mendapatkan informasi tentang user yang dituju.\n\n**Username**: ${user}\n**Tag**: ${user.tag}\n**ID**: ${user.id}\n**Masuk Pada**: ${message.member.joinedAt}\n**Akun Dibuat**: ${user.createdAt}`)
			.setFooter(`${user.username}`, `${user.displayAvatarURL({ format: "png", dynamic: true })}`)

			return message.channel.send(UserInfo);
		}
    }
}