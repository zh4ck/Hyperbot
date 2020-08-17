const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'serverinfo',
	description: 'Memberikan informasi lengkap tentang server',
	usage: '.serverinfo',
	aliases: ['serverinf', 'si', 'infoserver'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {

		if (!args.length) {
			const ServerInformation = new Discord.MessageEmbed()
			.setTitle('Informasi Server')
			.setColor('GOLD')
			.setThumbnail('https://i.ibb.co/3dxbNRM/hb.png')
			.setDescription('Dibawah ini adalah informasi lengkap tentang server ini.\n')
			.addFields(
				{ name: '\u200b\nNama Server', value: 'Hypercrown', inline: true },
				{ name: '\u200b\nDibuat Pada', value: `Kamis, 14 May 2020`, inline: true },
				{ name: '\u200b\nRegion Server', value: `Hongkong`, inline: true },
				{ name: '\u200b\nDibuat Oleh', value: '<@!688636365503594543>', inline: true },
				{ name: '\u200b\nOwner', value: '<@!265480948483751936>', inline: true },
				{ name: '\u200b\nBanyak Member', value : `${message.guild.memberCount}`, inline: true },
			)

			return message.channel.send(ServerInformation)
		}
    }
}