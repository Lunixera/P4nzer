const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const {prefix} = require('../settings.json');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
   var oyun = [
        "Sınırsız DC link; https://discord.gg/Nks8n8T",
        "Steam link; https://steamcommunity.com/groups/01010011pec",
        "mal nurhan",


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/Spectrum");
        }, 1 * 4000);
}