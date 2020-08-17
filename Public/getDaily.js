const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'daily',
	description: 'Memberikan user uang harian sebesar: Rp. 10,000',
	usage: '.daily',
	aliases: ['dailymoney', 'ambiluang', 'uang', 'duit', 'cash', 'harian'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: 86400,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		
		message.channel.send('Berhasil mengambil uang daily sebesar: **Rp.10,000**')
		data.push(`Berhasil menambahkan uang sebesar: **Rp.10,000** ke Bank-mu!`)

		return message.author.send(data)

		// Features waiting to be added: Add the money into the database; Variables or Randoms amount of money.
    }
}