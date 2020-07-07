const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
  // Go to config.json to change the prefix and please read license.txt. 
  
  const keepAlive = require('./server');
  keepAlive();
  // the line below is the line that logs the client (bot) in
  // make sure to check the other files too. they contain important stuff.
// server.js is for keeping the bot up. i highly recommend you use an external pinger, such as UptimeRobot, just incase. uptimerobot is what i use. if you are on glitch.com - then glitch is banning external pingers so you'll just have to rely on server.js
  client.login(process.env.TOKEN)
client.once('ready', () => {
	console.log('Ready!');

});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === 'firemessage') {
	if (!args.length) {
		return message.reply(`You didn't provide who I should fire!, ${message.author}!`);

        if (message.author.id === '(put your id here)') {
// ...
        }
  }

    message.channel.send('Got it!');


client.channels.cache.get(`723572523182325897`).send(`We have removed ${args} from the staff team. We thank you for your service.`);

  }

    if (command === 'outagegreen') {

      	if (!args.length) {

        if (message.author.id === '(put your id here)') {
// ...
        }
  }

    message.channel.send('Got it!');


client.channels.cache.get(`(insert channel id here)`).send(`All services are back on.`);

    }
        if (command === 'outageyellow') {

      	if (!args.length) {

        if (message.author.id === '(put your id here)') {
// ...
        }
  }

    message.channel.send('Got it!');


client.channels.cache.get(`(insert channel id here)`).send(`The issue has been found and we are restarting the bot.`);

    }
        if (command === 'outagered') {

      	if (!args.length) {

        if (message.author.id === '(put your id here)') {
// ...
        }
  }

    message.channel.send('Got it!');


client.channels.cache.get(`722907559542915174`).send(`There is a current outage. We are figuring out the issue.`);

        }


          if (command === 'yeetedlandtalk') {
	if (!args.length) {
		return message.reply(`You didn't give me what to say in #general!, ${message.author}!`);

        if (message.author.id === '(put your id here)','(put a friends id here)') {
// ...
        }
  }

    message.channel.send('Got it! Sending whatever you said to the general chat!');


client.channels.cache.get(`(put channel id here)`).send(`${args} from ${message.author.tag}`);

        }

  if (command === 'generaltalk') {
	if (!args.length) {
		return message.reply(`You didn't provide what to say, ${message.author}!`);
	}

    message.channel.send('Sending!');


client.channels.cache.get(`(put channel id here)`).send(`${args} from: ${message.author.tag}`);


	}
});
