const Discord = require('Discord.js')
const bot = new Discord.Client()
const webhook = new Discord.WebhookClient('622081419447107604', 'xHEXHKoG7KfXQDXj5QYM66mY2L56MrHWZZGVYDCFJ_z7vwgFLXCfDAhzrRykYjnfMojR')

//instance
bot.on('ready', function () {
	bot.user.setActivity('YouTube', { type: 'WATCHING' }).catch (console.error)
	console.log('////////////////////////////////////////// !')
	console.log('           connexion effectué !')
	console.log('////////////////////////////////////////// !')
})

bot.on('message', function (message) {
	if (message.content === '!help') {
		let Embed = new Discord.RichEmbed()
	 		.setDescription('CECI EST UNE DESCRIPTION')
	 		.setColor('#40FF71')
	 		.addField('première ligne', 'deuxième ligne')
	 		.addField('troisième ligne', 'quatre ligne')
	 		.setFooter('CECI EST UN FOOTER')
	 	message.channel.send(Embed)
		console.log('!help')
}

	 if (message.content === '!server') {
	 	let server_name = message.guild.name
	 	let server_size = message.guild.members.size
	 	message.channel.send('server : ' + server_name + '\nPersonne : ' + server_size)
	 	
	 	webhook.send('je suis un webhook!')
	 	


	 }
})

bot.login(process.env.TOKEN)