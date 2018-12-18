/* Getting discord.js to work.*/
const Discord = require('discord.js')
const client = new Discord.Client();

// Settings
var id = "Your bot ID here"
var clkey = "Cleverbot API key here"
var token = "Bot token here"

// Cleverbot setup:
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: clkey});

/*
This will make the bot reply when it gets mentioned.
(Thanks to GeopJr for the `message.content.includes` part!)
*/
client.on("message", (message) => {
  if (message.content.includes(id)) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
})

/*
As example, you have a channel named #ai.
Well, have a chat with the bot in there. No tagging.
*/
client.on("message", async function (message) {
	if(message.author.id == config.bot_id) return;
    if(message.channel.name == "ai"){
	    clbot.write(message.content, (response) => {
	      message.channel.startTyping();
	      setTimeout(() => {
	        message.channel.send(response.output).catch(console.error);
	        message.channel.stopTyping();
	      }, Math.random() * (1 - 3) + 1 * 1000);
	    });
    }
});

/* Make the application able to login to your bot. */
client.login(token);
