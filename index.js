const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = config.prefix;
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if(err) {
		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");
	if(jsFiles.length <= 0) {
		console.error("No commands found.");
		return;
	}

	console.log("Loading Commands...");

	jsFiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on("ready", async () => {
	console.log(`Bot Is Now Activated`);

	//Bot Status
	bot.user.setActivity(`yo mama fool`);

	try {
		//Generates a invite link in the console...
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});
bot.on("message", async message => { 
	if (message.author.bot) return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);


	let cmd = bot.commands.get(command.slice(prefix.length));

	if(cmd) {
		cmd.run(bot, message, args);
	}
});

bot.login(config.token);