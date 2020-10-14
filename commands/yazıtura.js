const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();
	
	const cevaplar = [
		"Tura çıktı",
		"Yazı çıktı"
	];
	
exports.run = async (client, message) => {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	let yukarı = await message.channel.send({
		embed: {
			color: "#ffffff",
			description: `${message.author.tag} havaya para fırlattı!`,
			image: {
			url: "https://i.pinimg.com/originals/8f/06/04/8f0604aedc34d33d2f41113c312a588d.gif?size=1024"
			}
		}
	});
		
    let aşağı = (Math.random() * [
		"Tura çıktı",
		"Yazı çıktı"
	]);
    setTimeout(() => {
        yukarı.edit({
            embed: {
                color: "#ffffff",
                description: `${cevap} ${message.author.tag}.`
            }
        });
    }, 5 * 1000);
}; 
	
exports.conf = {
enabled: true, 
guildOnly: false, 
aliases: ["yt", "yazı", "tura"],
permLevel: 0 
};
	
exports.help = {
name: 'yazıtura', 
description: 'Yazı-Tura atar.',
usage: 'yazıtura'
};