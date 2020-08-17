const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'roleinfo',
	description: 'Memberikan informasi tentang roles yang ada di server ini baik secara spesifik maupun secara keseluruhan',
	usage: '.roleinfo & .roleinfo (Nama roles)',
	aliases: ['ri', 'inforole', 'rolesinfo', 'inforoles', 'roleinf', 'rolesinf'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {

		if (!args.length) {
		const RoleInformation = new Discord.MessageEmbed()
		.setTitle('Role Information')
		.setThumbnail('https://i.ibb.co/3dxbNRM/hb.png')
		.setColor('GOLD')
		.setDescription('Dibawah ini adalah informasi mengenai roles yang ada di server ini.')
		.addFields(
			{ name: '\u200b\n🔧 Administratif', value: '\u200b\n**<@&721339833963773982>** : Penemu atau pencetus awal server ini dibuat\n**<@&710459193231933532>** : Pemilik server ini\n**<@&720276161011122197>**  : Pengatur server, bertugas mengawasi dan menjaga server\n**<@&720276669176479864>** : Membuat Bot\n**<@&710458466019573760> & <@&725682623044649011>** : Mengawasi server\n**<@&710458602040721438> & <@&729543387115421707>** : Bot'},
			{ name: '\u200b\n🌎 Publik', value: '\u200b\n<@&710484009313894491> : User yang telah memboost server\n<@&720276906527948823> **&** <@&720276816136241223> : User yang telah berdonasi ke server ini\n<@&720990998779527248> **&** <@&720277078733226075> : User yang telah menginvite user lain di server ini sebanyak 20+ user dan 10+ user\n<@&721250870477586473> : Youtubers\n<@&720276484308074638> : User yang telah membaca rules server\n<@&720277000291352669> : User dengan level 50+\n<@&720993130823942216> : User dengan level 30+\n<@&710484137622110228> : User dengan level 25+\n<@&710484081934073906> : User dengan level 10+'},
			{ name: '\u200b\n❔ FAQ', value: '\u200b\n**Q : Apa kegunaan roles <@&730778544728309821> dan <@&729309777540415518>?**\nA : Kegunaan-nya hanya sebagai penanda bahwa User tersebut sedang Streaming atau bermain Uno.\n\n**Q : Kegunaan roles Games? (ex: Valorant, CSGO)**\nA : Sebagai pengganti @everyone, dikarenakan jika menggunakan @everyone akan me-mention seluruh members yang ada, maka kami ganti menjadi roles terpisah.'}
		)
		.setFooter('Hyperbot', 'https://i.ibb.co/3dxbNRM/hb.png');
		
		return message.channel.send(RoleInformation);

		// Features waiting to be added: Specific Roles Information; .roleinfo @Owner = new Discord.MessageEmbed()
		
		}
    }
}