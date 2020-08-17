const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const path = require('path');
const cooldowns = new Discord.Collection();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const arrDir = ['./aPublic', './bAdmin', './cMusic', './dAutoModeration', './eServerLog', './fWelcome', './gFun', './hMisc', './jDatabase', './kTesting'];

const commandFiles = arrDir
    .map(dir => {
        const listFiles = fs.readdirSync(dir);
        return listFiles.map(file => path.join(__dirname, dir, file));
    })
    .flat()
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(file);
    client.commands.set(command.name, command);
}

// Log DiscordAPI errors if occurs
process.on('unhandledRejection', error => {
	console.error('(DiscordAPI) Unhandled promise rejection:', error);
});

// Log Websocket errors if occurs
client.on('shardError', error => {
	console.error('(Websocket) A websocket connection encountered an error:', error);
});

client.once('ready', () => {
	console.log(`#Version : Beta 1.5\nLogin as ${client.user.tag}`)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/g)
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply(`Halo, ${message.author}! Saya tidak bisa mengeksekusi command tersebut di DM!\nJika butuh bantuan seputar command, silahkan cek channel <#729226490528399410>`);
	}

	if (command.args && !args.length) {
		let reply = `Kamu tidak menyertakan argumen, ${message.author}!`

		if (command.usage) {
			reply += `Pengunaan : \`${prefix}${command.name} ${command.usage}\``
		}

		return message.channel.send(reply);

	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeftH = (expirationTime - now) / 1000 / 3600
		const timeLeftM = (expirationTime - now) / 1000 % 3600 / 60
		const timeLeftS = (expirationTime - now) / 1000 % 3600 % 60
		return message.channel.send(`Cooldown: **${timeLeftH.toFixed()} Jam**, **${timeLeftM.toFixed()} Menit**, dan **${timeLeftS.toFixed()} Detik** untuk menggunakan command **${command.name}** kembali!`);
	}
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Terdapat kesalahan saat mengeksekusi command tersebut!');
	}
});

client.login("Insert Token");
