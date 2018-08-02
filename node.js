/* Getting discord.js to work.*/
const Discord = require('discord.js')
const client = new Discord.Client();

// Cleverbot setup:
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: "YOUR API KEY HERE, CHECK README.MD"});

/*
This will make the bot reply when it gets mentioned.
(Thanks to GeopJr for the `message.content.includes` part!)
*/
client.on("message", (message) => {
  if (message.content.includes("<@REPLACE WITH YOUR BOT ID>")) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
})

/* Make the application able to login to your bot. */1
client.login('YOUR BOT TOKEN');
