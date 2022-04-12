require('events').EventEmitter.prototype._maxListeners = 100;
// Increase Listeners Limit

const {Client, MessageEmbed, MessageAttachment } = require('discord.js',);

const client = new Client();

client.on('ready', () => {
  console.log(`#DEBUGMODE=TRUE\n#VERSION=DEBUG-UNDEFINED\nLogin sebagai : ${client.user.tag}`);
  console.log(`Ini adalah mode BETA! yang berarti masih banyak kesalahan dan tidak ada optimisasi.`)
});

/* Jika berjalan dengan benar, maka akan keluar output 
"Logged In As Hypercrown" di console,*/

// [Main Structure]

// (Response)

/*
client.on('message', message => {
    if (message.content === '') {
      message.channel.send('');
    }
  });
*/

/*
Bot akan memberikan respon jika User mengirim teks
Ini juga akan berlaku jika Bot mengirim teks
Pertama, sehingga dapat menyebabkan infinite loop
Disarankan untuk tidak membuat respon yang berbalik.
*/

// (User Mention)

client.on('message', message => {
  if (message.content === '#hyperdebug/usermention <@!265480948483751936>') {
    message.channel.send('Oke, <@!265480948483751936>');
  }
});

/*
<@265480948483751936> diatas adalah ID untuk @Zhxck.
Untuk me-mention User secara spesifik, gunakan "\@(user)"
Pada Discord untuk mendapatkan ID nya, Bot tidak bisa
Me-mention User jika hanya menggunakan nama Usernya saja
*/

// (Channel Mention)

client.on('message', message => {
  if (message.content === '#hyperdebug/channelmention <#710459742165663785>') {
    message.channel.send('Oke, <#710459742165663785>!');
  }
});

/*
<#710459742165663785> diatas adalah ID untuk channel #readme.
Untuk me-mention Channel secara spesifik, gunakan "\#channelname"
pada Discord untuk mendapatkan ID nya, Bot tidak bisa
me-mention Channel jika hanya menggunakan nama Channelnya saja
*/

// (Role Mention)

client.on('message', message => {
  if (message.content === '#hyperdebug/rolemention <@&710459193231933532>') {
    message.channel.send('Oke, <@&710459193231933532>!');
  }
});

/*
<@&710459193231933532> diatas adalah role @Owner.
Untuk me-mention Role secara spesifik, gunakan "\@Rolename"
pada Discord untuk mendapatkan ID nya, Bot tidak bisa
me-mention Role jika hanya menggunakan nama Rolenya saja.
*/

// (Mengambil Avatar)

client.on('message', message => {
  if (message.content === '#hyperdebug/avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

/*
Bot akan mengirimkan link Avatar atau Profile Picture sang
pengirim command.
*/

// (Website Attachment)
client.on('message', message => {

  if (message.content === '#hyperdebug/attachment') {
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(attachment);
  }
});

// (Website Attachment + Mention)
client.on('message', message => {
  if (message.content === '#hyberdebug/attachmention') {
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(`${message.author},`, attachment);
  }
});

/*
Untuk meng-attach suatu File, dibutuhkan "const attachment = new MesssageAttachment('Link Attachment');
lalu menggunakan 'message.channel.send(attachment);. 'Const' bekerja sebagai 'Variabel' dan 'Variabel' tersebut ialah 'attachment', 
kalian bisa mengganti 'attachment' dengan kata-kata lain seperti 'attach' dan lain sebagainya. 'new' bekerja sebagai penambah command yaitu 'MessageAttachment' sebagai
command basic atau dasar dari meng-attach suatu file dari website.
*/


// (Local Files Attachment)
client.on('message', message => {
  if (message.content === '.showlevel') {
    const attachment = new MessageAttachment('file/level.png');
    message.channel.send(attachment);
  }
});

// (Local Files Attachment + Mention)
client.on('message', message => {
  if (message.content === '#hyperdebug/localattachmention') {
    const attachment = new MessageAttachment('file/zhack.png');
    message.channel.send(`${message.author},`, attachment);
  }
});

/*
Diatas kita mengganti isi MessageAttachment dengan './file.png'. Kita juga dapat mengganti
nama file, folder, atau tipe file yang akan di-attach dengan cara mengganti nama dan directory
yang ada di dalam MessageAttachment.
*/

// (Welcome Greeting)
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🌟welcome-bye');
  if (!channel) return;
  channel.send(`Selamat datang di **Hypercrown**, ${member}`);
});

// (Goodbye Greeting)
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🌟welcome-bye');
  if (!channel) return;
  channel.send(`Selamat tinggal, ${member}`);
});

/*
guildMemberAdd = Member baru masuk, guildMemberRemove = Member keluar.
ch.name = Nama Channel.
*/

// (Message Embed)

// Red
client.on('message', message => {
  if (message.content === '#hyperdebug/embedred') {
    const embed = new MessageEmbed()
      .setTitle('Embed')
      .setColor(0xFF0000)
      .setDescription('Embed1');
    message.channel.send(embed);
  }
});

// Green
client.on('message', message => {
  if (message.content === '#hyperdebug/embedgreen') {
    const embed = new MessageEmbed()
      .setTitle('Embed')
      .setColor(0x00FF27)
      .setDescription('Embed1');
    message.channel.send(embed);
  }
});

// Blue
client.on('message', message => {
  if (message.content === '#hyperdebug/embedblue') {
    const embed = new MessageEmbed()
      .setTitle('Embed')
      .setColor(0x0027FF)
      .setDescription('Embed1');
    message.channel.send(embed);
  }
});

// Lampu Merah
client.on('message', message => {
  if (message.content === '#hyperdebug/embedlampumerah') {
    const red = new MessageEmbed()
      .setTitle('Merah')
      .setColor(0xFF0000)
      .setDescription('Berhenti');
    message.channel.send(red);
    const green = new MessageEmbed()
    .setTitle('Kuning')
    .setColor(0xF1FF00)
    .setDescription('Siap-siap');
  message.channel.send(green);
  const blue = new MessageEmbed()
  .setTitle('Hijau')
  .setColor(0x00FF0B)
  .setDescription('Jalan');
message.channel.send(blue);
  }
});

/*
Untuk mengganti warna, silahkan buka website https://htmlcolorcodes.com/ lalu tambahkan
"0x" didepan-nya, contoh = warna merah adalah "FF0000", untuk membuatnya berfungsi, kita harus
menambahkan "0x" menjadi "0xFF0000".

Untuk mengganti "const" atau variabel, cukup ganti nama const dan
"message.channel.send(nama const)".
*/

// (Kick)
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('#hyperdebug/kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick(`Dikeluarkan oleh ${message.author}`)
          .then(() => {
            message.channel.send(`${user} telah dikeluarkan dari server oleh ${message.author}!`);
          })
          .catch(err => {
            message.channel.send(`Kamu tidak dapat mengeluarkan ${user}!`);
          });
      } else {
        message.reply("User itu tidak ada di server ini!");
      }
    } else {
      message.reply("Kamu tidak menyebutkan User yang akan dikeluarkan!");
    }
  }
});

/*
Untuk mengganti reason atau alasan di audit logs, cukup ganti isi dari ".kick",
untuk mengganti User Mention menjadi User Tag, cukup tambahkan ".tag" didepan ${user},
untuk membuat Bot tidak me-mention dirimu, cukup ganti "message.reply" menjadi
"message.channel.send".
*/

// (Ban)
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('#hyperdebug/ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: `Di-ban oleh ${message.author}`,
          })
          .then(() => {
            message.channel.send(`${user} telah di-ban oleh ${message.author}!`);
          })
          .catch(err => {
            message.channel.send(`Kamu tidak bisa mem-ban ${user}!`);
            console.error(err);
          });
      } else {
        message.reply("User itu tidak ada di server ini!");
      }
    } else {
      message.reply("Kamu tidak menyebutkan User yang akan di-ban");
    }
  }
});

/*
*/

// (Server Info)
client.on('message', message => {
  if (message.content === '#hyperdebug/serverinfo') {
    const serverinfo = new MessageEmbed()
    .setTitle('Server Info')
    .setColor(0xFFAB00)
    .setDescription(`Nama Server : ${message.guild.name}\nServer Dibuat : ${message.guild.createdAt}\nTotal Members : ${message.guild.memberCount}\nTotal Roles : ${message.guild.roles.cache.size}\nTotal Channels : ${message.guild.channels.cache.filter((c) => c.type === 'text' || c.type === 'voice').size}`);
    message.channel.send(serverinfo);
  }
});

// (User Info)
client.on('message', message => {
  if (message.content.startsWith('#hyperdebug/userinfo')) {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);
    if (member) {
      const userinfo = new MessageEmbed()
      .setTitle('Member Info')
      .setColor(0xFFAB00)
      .setDescription(`\`\`\`fix\nUsername : ${user.username}\nID : ${user.id}\n\`\`\``);
      message.channel.send(userinfo);
  } else {
    message.reply("kamu tidak menyebutkan User!");
  }
  }
});

// (Webhook)
// (Open Slot Announcement)
client.on('message', message => {
  if (message.content === '#hc/announcement') {
    const newAnnouncement = new MessageEmbed()
    .setTitle('Open Slot')
    .setColor(0xFFAB00)
    .setDescription(`Announced by : ${message.author}\nDescription : Open slot untuk role <@&710458466019573760>! untuk informasi lebih lanjut silahkan DM Owner: <@!265480948483751936>`)
    message.channel.send(newAnnouncement);
    message.channel.send('@everyone');
  }
});

// (Turning Off and On)

client.on('message', message => {
    if (message.content === '#hyperdebug/disable') {
      message.channel.send('<@720253238376661032> is Disabled!');
    }
  });

  client.on('message', message => {
    if (message.content === '#hyperdebug/enable') {
      message.channel.send('<@720253238376661032> is Enabled!');
    }
  });

// (Embed Rules)
client.on('message', message => {
  if (message.content === '#hc/rules') {
    const Rules = new MessageEmbed()
    .setTitle('Warn List')
    .setColor(0xFFAB00)
    .setDescription(`[1] : Tidak berdampak sama sekali\n[3] : Voice & Text Mute selama 3 Jam\n[5] : Temporary Kick\n[7] : Temporary Ban\n[9] : Permanent Ban`)
    message.channel.send(Rules);
  }
});

// (About)
client.on("message", message => {
  if (message.content === '.about') {
  const About = new MessageEmbed()
  .setTitle('About')
  .setColor(0xFFAB00)
  .setDescription(`Warning : This is Debug Mode, use "node hypercrown.js" to run this Bot properly.\nBot Version : Alpha 1.0\nCode Error : 0\n\nʜʏᴘᴇʀᴄʀᴏᴡɴ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ <@!265480948483751936>`)
  message.channel.send(About);
  }
});

// (Level)
client.on("message", message => {
  if (message.content === "#hcdebug/level") {
    const userLevel = new MessageEmbed()
    .setTitle(`Your Level`)
    .setColor('0xFFAB00')
    .setDescription(`Name : ${message.author}\nLevel : 0\nXP : 100\nRank : Member / Undefined, You need 750 XP more to reach <@&710484081934073906>!`)
    message.channel.send(userLevel);
  }
});

// (Leaderboard)
client.on("message", message => {
  if (message.content === "#hcdebug/leaderboard") {
    const Leaderboard = new MessageEmbed()
    .setTitle(`Leaderboard`)
    .setColor('0xFFAB00')
    .setDescription(`Top 1 : ${message.author}\nTop 2 : Undefined\nTop 3 : Undefined`)
    message.channel.send(Leaderboard);
  }
});

// (Give XP)
client.on("message", message => {
  if (message.content.startsWith("#hcdebug/givexp")) {
    message.channel.send(`Raised ${message.author} XP to 500!`)
  }
});

// Ini hanya untuk dekorasi.

client.login('insert token');
