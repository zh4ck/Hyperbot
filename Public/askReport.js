const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client()

args: true,
module.exports = {
	name: 'report',
	description: 'Melaporkan user yang melanggar peraturan',
	usage: '.report (Alasan) (User)',
	aliases: ['lapor', 'melaporkan'],
	allowed: ('Semua Roles'),
	guildOnly: true,
	cooldown: '0',
	execute(message, args) {
		const user = message.mentions.users.first();
		const guild = client.guilds.cache.get('710452307732594760')
        const members = message.member || guild.members.cache.get(`${message.author.id}`)

		const reason = args.slice(1).join(' ');

		const reportEmbed = new Discord.MessageEmbed()
		.setTitle('Laporan')
		.setColor('GOLD')
		.setDescription(`Pelapor: ${message.author}\nMelaporkan: ${user}\nAlasan: ${reason}\n\n**Status**: Terkirim. Tunggulah <@&725682623044649011>, <@&710458466019573760>, atau <@&720276161011122197> untuk memberikan respon ke laporan-mu!`);

		const reportEmbedSend = new Discord.MessageEmbed()
		.setTitle('Dokumen Laporan')
		.setColor('GOLD')
		.setDescription(`**Pelapor**: ${message.author}\n**Melaporkan**: ${user}\n**Alasan**: ${reason}\n**Dilaporkan Pada**: ${message.createdAt}\n\n**NOTE**: Lakukanlah investigasi dan penyelidikan terlebih dahulu, jika benar, maka laporkan User tersebut menggunakan \`.warn\``);

		if (!args.length) {
			message.channel.send(`Pengunaan : \`.report (User) (Laporan)\``);
		} else if (!user) {
			message.channel.send(`Kamu harus menyertakan User, ${message.author}!\nPengunaan : \`.report (User) (Laporan)\``)
		}else if (!reason) {
			message.channel.send(`Kamu harus menyertakan Alasan, ${message.author}!\nPengunaan : \`.report (User) (Laporan)\``);
		} else if (user && reason) {
		message.channel.send("Apakah kamu yakin untuk meng-submit laporan ini? React dengan '<a:anim_yes:734063859291127818>' untuk melanjutkan, '<a:anim_no:734398632257912843>' untuk membatalkan (Otomatis dibatalkan jika tidak react selama 30 detik).")
		sendMessage => sendMessage.react('734063859291127818')
		.then(() => sendMessage.react('734398632257912843'));
		
		const filter = (reaction, user) => {
			return ['734063859291127818', '734398632257912843'].includes(reaction.emoji.id) && user.id === message.author.id;
		};

		message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.id === '734063859291127818') {
					message.reply('Continue');
				} else if (reaction.emoji.id === '734398632257912843') {
					message.reply('Cancel');
				}
			})
			.catch(collected => {
				console.log(`After a minute, only ${collected.size}`);
				message.reply('Laporan telah expired.');
			});
	}
		}
	}