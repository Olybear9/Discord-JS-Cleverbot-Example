# Discord-JS-Cleverbot-Example
Description: "Using Cleverbot API (https://www.cleverbot.com/api/) to make a discord bot that responds to mentions using Discord-JS!"

IMPORTANT MESSAGE: Cleverbot.com recently shut down their free api, you now need to buy for 10 dollars.

Check the node JS file node.js for an example of how you can use the API to get your discord bot able to respond to mentions as a human I guess.


--> Known bugs:
 - Spams users when you PM the bot and waste all free API requests from https://www.cleverbot.com/api/ (check how to)!
 - (FIXED, https://github.com/Feelingly/Discord-JS-Cleverbot-Example/issues/1) This isn't really a bug, but you HAVE to mention the bot at first, looking for a way to just make it like if it has @BOTNAME#0001 in the message. Or make it toggleable. As said not really a bug but a thing we'll have to work on.
 - This is just not nice, the user can spam the bot and get you out of API requests. Adding cooldown soon as possible.
 
 
 --> Requirements:
   - Basic knowledge is good.
   - Nodejs &  npm installed.
   - Text editor & host for the bot.
 
 
 --> How to:
 
 * For Linux:
   - Open SSH and an FTP program. 
   - Then install the node.js file make sure you have installed NPM & Node-JS. 
   - Then do `npm install discord.js` then wait for it to install. After that do `npm install cleverbot-node` wait for it.
   - Now you need an API key from https://www.cleverbot.com/api/ in order to do that create an account on that sit. Then copy your 'API key' then put it in the node.js file. It is limited to an x amount of request when you're out of API requests you can buy them or create a new account but that won't support the developers that's up to you.
   
 * For Windows: 
    - After installing both nodejs and npm you can go to the next step.
    - Make a folder in your documents, desktop or any location it doesn't matter.
    - Download the node.js file and put it in the folder.
    - Open the npm console and look for the file location and do `cd [file location to folder here]` to go to the right folder.
    - Then install discord.js by executing `npm install discord.js` and wait for it. After that's done do: `npm install cleverbot-node` and you're done for the installation part.
    - Now you need an API key from https://www.cleverbot.com/api/ in order to do that create an account on that sit. Then copy your 'API key' then put it in the node.js file. It is limited to an x amount of request when you're out of API requests you can buy them or create a new account but that won't support the developers that's up to you.
