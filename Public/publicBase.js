const Discord = require('discord.js') // Me-require ulang discord.js
const { prefix } = require('../config.json'); // Me-require ulang config.json
args: true, // Membuat args menjadi true, berarti membuat command ini menerima User Input
module.exports = {
	name: 'base', // Nama command, sangat sensitif dan penting
	description: 'base structure', // Deskripsi command
	guildOnly: true, // Membuat command hanya dapat digunakan di Server
	usage: '<insert usage>', // Pengunaan command
	aliases: ['alias1', 'alias2'], // Aliases yang dimiliki oleh command, dapat membantu jika User menggunakan All-caps atau All-low
	allowed: ('Roles'), // Roles yang di-izinkan atau mendapatkan akses untuk menggunakan command ini
	execute(message, args) {
    }
}