// Import discord.js and create the client
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

// Start database 
/* const postgresql = require('pg')
const pg = new postgresql.Client() */

const config = require('./config.json');

// Database query
/* pg.connect()
const res = pg.query('SELECT $1::text as message', ['Hello world!'])
console.log(res) // Hello world! */

// Print ready when discord bot is ready
client.on('ready', () => {
    console.log('Ready!')
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.startsWith('!ping')) {
        message.reply('Pong!');
    }
});

client.login(config["token"]);