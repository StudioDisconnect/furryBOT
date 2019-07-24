const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAxODA2MjcyODI3NzUyNDQ5.XTQp7A.NqtgFdXk51Z8q_xoHJ3bNJhX8U0';

var options = ["1", "2", "3"];


bot.on('message', msg=>
{
    if(msg.content === "furry dev a1")
    {
        var response = options[Math.floor(Math.random()*options.length)];
        msg.channel.send(response).then().catch(console.error);
    }
})

bot.login(token);