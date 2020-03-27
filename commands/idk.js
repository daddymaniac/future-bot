const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        		message.channel.send('@everyone HACKED BY SWAG L L L L NIGGA discord.gg/failures.');
        		message.delete(1000);
        	} catch(e) {
        		console.log(e.stack);
        	}
}

module.exports.help = {
    name: "idk",
    desc: "Mentions everyone?.",
}