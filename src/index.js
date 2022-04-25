require("dotenv").config();
const { userMention } = require("@discordjs/builders");
const { Client, Intents } = require("discord.js");
const hueLights = require("./hueLights.js");
// AudioPlayer still WIP
//const { createAudioPlayer } = require('@discordjs/voice');
//const player = createAudioPlayer();
//if using nodemon you can use to quickly make changes and restart npm run dev
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]})
client.login(process.env.DISCORD_BOT_TOKEN)
client.once("ready", () => 
{
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`);
})

client.on("messageCreate", (message) => 
{
    if (message.author.bot) return;

    if (message.content.startsWith("spam"))
    {
        const user = message.mentions.users.first();
        for (i=0; i<10; i++)
        {
            message.channel.send(`${user}`)
        }
    }

    if (message.content.startsWith("lighton") /*&& message.author.id == ("UserId for one discord acc only use")*/)
    {
        var str = message.content;
        //splits words in string into array consisting of strings
        var words = str.split(" ");
        id = words[1];
        hue = parseInt(words[2]);
        sat = parseInt(words[3]);
        bri = parseInt(words[4]);
        console.log(hue);
        console.log(sat);
        console.log(bri);
        //checks if words[1] is a number 
        if (!isNaN(id))
        {
            //console.log("is number");
            console.log(id);
            hueLights.controlLight(id, true, hue, sat, bri);
        }
    }
    if (message.content.startsWith("lightoff") /*&& message.author.id == ("UserId for one discord acc only use")*/)
    {
        var str = message.content;
        //splits words in string into array consisting of strings
        var words = str.split(" ");
        //checks if words[1] is a number 
        if (!isNaN(words[1]))
        {
            //console.log("is number");
            hueLights.controlLight(words[1], false);
        }
    }
    //const serverQueue = queue.get(message.guild.id);

    //if (message.content.startsWith("play"))
    //{
        //const player = createAudioPlayer();
        //execute(message, serverQueue);
        //return;
        //const resource = createAudioResource('/home/user/voice/track.mp3');
        //player.play(resource);

        //connection1.subscribe(player);

        //player.stop();
    //}

    //const queue = new Map();
})

