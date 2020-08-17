const Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client();

module.exports = {
	name: 'help',
	description: 'Memberikan bantuan tentang server dan command',
	aliases: ['bantuan', 'bantu'],
	usage: '.help (Nama command)',
	allowed: 'Semua Roles',
	cooldown: '0',
	guildOnly: true,
	execute(message, args) {
const data = [];
const { commands } = message.client;

const guild = client.guilds.cache.get("710452307732594760")

const members = message.member || guild.members.cache.get(message.author.id)
const Admin = message.member.roles.cache.some(role => role.name === "Owner") || message.member.roles.cache.some(role => role.name === "Admin") || message.member.roles.cache.some(role => role.name === "Programmer") || message.member.roles.cache.some(role => role.name === "Moderator") || message.member.roles.cache.some(role => role.name === "Trainee Moderator")

const HelpPublic = new Discord.MessageEmbed()
.setTitle('ʜʏᴘᴇʀʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ')
.setURL('http://discord.gg/AZyu2NC')
.setColor('0xFFAB00')
.setThumbnail('https://i.ibb.co/3dxbNRM/hb.png')
.setDescription(`Visibility: **Public**\nUsername: ${message.author}\n`)
.addFields(
{ name: '\u200b\n🔧 Utilitas\n', value:"\u200b\n**.help**: Memberikan bantuan tentang server dan command\n**.report**: Melaporkan User jika melanggar rules atau ketentuan Server\n**.avatar**: Memberikan Avatar atau Profile Picture seseorang\n**.invite**: Memberikan permanent invite link Server ini\n**.roleinfo**: Memberikan informasi tentang role tersebut\n**.serverinfo**: Memberikan informasi tentang server\n**.userinfo**: Memberikan informasi tentang user tersebut\n**.warnlist**: Memberikan warning list User tersebut\n**.ping**: Memberikan informasi tentang berapa Ping-mu sekarang\n**.time**: Memberikan waktu sekarang (WIB)\n"},
{ name: '\u200b\n✨ Fun\n', value: '\u200b\n**.profile**: Menunjukan profile-mu!\n**.customprofile**: Kostumisasikan profile-mu!\n**.level**: Menunjukan Level kamu saat ini\n**.reputation**: Menunjukan reputasi yang kamu miliki\n**.leaderboard**: Menunjukan Leaderboard\n**.leaderboardmoney**: Menunjukan Leaderboard uang terbanyak\n**.leaderboardtext**: Menunjukan Leaderboard Level tertinggi\n**.leaderboardrep**: Menunjukan Leaderboard reputasi tertinggi\n**.givereputation**: Memberikan reputasi kepada User yang dituju\n'},
{ name: '\u200b\n💰 Currency\n', value: '\u200b\n**.dompet**: Menunjukan berapa banyak uang kamu yang berada di dompet\n**.bank**: Menunjukan berapa banyak uang kamu yang berada di Bank\n**.givemoney**: Memberikan uang kepada User yang dituju\n**.shop**: Beli barang di Server Shop!\n**.createshop**: Buat market-mu sendiri!\n**.depositbank**: Setor uang-mu ke Bank Hypercrown!\n**.withdrawbank**: Mengambil uang yang berada di Bank\n**.judi**: Memulai permainan Judi, dibutuhkan minimal 3 orang untuk bermain\n**.judicancel**: Membatalkan permainan Judi\n**.roll**: Putar dadu dan dapatkan uang!\n**.maling**: Mengambil uang di dompet seseorang'},
{ name: '\u200b\n🎵 Music\n', value: '\u200b\n**.play**: Memutar musik yang diinginakan\n**.pause**: Mem-pause musik yang sedang diputar\n**.resume**: Melanjukan musik\n**.stop**: Memberhentikan musik\n**.skip**: Mengabaikan musik yang sedang diputar, lalu melanjutkan ke musik selanjutnya yang ada di queue\n**.queue**: Memperlihatkan queue\n**.skipto (Urutan)**: Melompati musik dan langsung memutar musik yang berada di urutan queue tersebut\n**.leave**: Mengeluarkan Bot dari channel\n**.loop**: Memutar lagu yang ad di queue secara terus menerus'},
{ name: '\u200b\n❔ FAQ\n', value:'\u200b\n**Q : Bagaimana cara mengkostumisasikan profile saya?**\nA : Silahkan gunakan command **.customprofile** dan buka link yang sudah di-sediakan, silahkan isi forms tersebut dan akan kami ubah profile-mu!\n\n**Q : Apa perbedaan Dompet dengan Bank?**\nA : Jika kamu menyimpan uang di Dompet, kamu dapat membeli barang di <#728978155049582644> dengan potongan harga, kekurangan-nya yaitu uang kamu dapat di-maling oleh seseorang, untuk menghindari maling, kamu dapat membeli item **Guardian** di <#728978155049582644>. Sementara untuk Bank, uang-mu aman dan tidak dapat di-maling, namun, kamu akan mengeluarkan uang lebih di <#728978155049582644>.'},
)
.setFooter('Hyperbot', 'https://i.ibb.co/3dxbNRM/hb.png');

const HelpAdmin = new Discord.MessageEmbed()
.setTitle('ʜʏᴘᴇʀʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ')
.setURL('http://discord.gg/AZyu2NC')
.setColor('0xFFAB00')
.setThumbnail('https://i.ibb.co/3dxbNRM/hb.png')
.setDescription(`Visibility: **Administrative // Hidden**\nUsername: ${message.author}`)
.addFields(
{ name: '\u200b\n🔧 Admin\n', value:"\u200b\n**.warn**: Memperingatkan atau memberikan peringatan kepada User yang melanggar peraturan\n**.mute**: Membisukan User di text channel\n**.vmute**: Membisukan User di voice channel\n**.move**: Memindahkan User dari Voice Channel\n**.kick**: Menendang player dari server\n**.ban**: Mem-ban User dari server"},
{ name: '\u200b\n🔨 Moderator\n', value:"\u200b\n**.warn**: Memperingatkan atau memberikan peringatan kepada User yang melanggar peraturan\n**.mute**: Membisukan User di text channel\n**.vmute**: Membisukan User di voice channel\n**.move**: Memindahkan User dari Voice Channel"},
{ name: '\u200b\n❔ FAQ\n', value: "\u200b\n**Q : Apa yang harus saya lakukan ketika ada Member yang melanggar peraturan server?**\nA : Gunakan command .warn untuk memberikan mereka peringatan dan memberikan efek jera!\n\n**Q : Ada Admin yang bersifat sangat sombong, apa yang harus saya lakukan?**\nA : DM <@&710459193231933532> dan jeleskan kronologi & bukti lengkap untuk melaporkan!"},
)
.setFooter('Hyperbot', 'https://i.ibb.co/3dxbNRM/hb.png');

if (!args.length && !Admin) {

if (!members) return;
data.push('Hai! dibawah adalah list command yang dapat digunakan untuk sekarang, untuk mengetahui command secara spesifik & detail, kamu bisa menggunakan `.help (Nama command)`. Jika kamu butuh bantuan seputar server, silahkan cek channel <#710459742165663785>!');

return message.author.send(data, HelpPublic, { split: true })
.then(() => {
if (message.channel.type === 'dm') return;
message.channel.send(`Hai ${message.author}! Aku telah mengirimkan pesan ke DM-mu!`);
})
.catch(error => {
console.error(`Tidak bisa mengirimkan DM ke ${message.author.tag}.\n`, error);
message.reply('Sepertinya aku tidak bisa mengirimkan pesan ke DM-mu, tolong nyalakan opsi **"Allow direct messages from Members"** di Discord-mu, ya!');
});

} else if (!args.length && Admin) {

	if (!members) return;
	data.push('Hai! dibawah adalah list command yang dapat digunakan untuk sekarang, untuk mengetahui command secara spesifik & detail, kamu bisa menggunakan `.help (Nama command)`. Jika kamu butuh bantuan seputar server, silahkan cek channel <#710459742165663785>!\n\nPssst! Kamu bisa meng-copy link yang berada di tulisan **Hyperbot Command List** untuk mendapatkan perma-link server!');	
	
	return message.author.send(data, HelpPublic, { split: true }) && message.author.send(HelpAdmin)
	
	.then(() => {
	if (message.channel.type === 'dm') return;
	message.channel.send(`Hai ${message.author}! Aku telah mengirimkan pesan ke DM-mu!`);
	})
	.catch(error => {
	console.error(`Tidak bisa mengirimkan DM ke ${message.author.tag}.\n`, error);
	message.reply('Sepertinya aku tidak bisa mengirimkan pesan melalui DM, tolong nyalakan opsi **"Allow direct messages from Members"** di Discord-mu, ya!');
	});
}

const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
return message.reply('Itu bukan command yang valid!');
}

const commandEmbed = new Discord.MessageEmbed()
.setTitle('ɪɴꜰᴏʀᴍᴀꜱɪ ᴄᴏᴍᴍᴀɴᴅ')
.setColor('0xFFAB00')
.setDescription(`**Nama:** ${prefix}${command.name}\n**Alias:** ${command.aliases}\n**Deskripsi:** ${command.description}\n**Pengunaan:** ${command.usage}\n**Dapat digunakan oleh:** ${command.allowed}`)
data.push(commandEmbed);

message.channel.send(data, { split: true });
  },
};