const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAxODA2MjcyODI3NzUyNDQ5.XTQscQ.9rEDUml16tmYR9l0CsTgOWO9o6k';

bot.on('ready', () =>
{
   console.log('furry_main.js has been uploaded to discords servers!')
})
var furryowouwu = ["pull my tail owo plweaaase", "uuuuuuwu, ooo buldgy get bigger **uwo**", "o2oo, can you touch my buldgy woldgy", "o, daddy plz adopt me", "make mwee dadddy, oooowuuaaaaa", "uuouuouuoouoooouuuaaaaaaaaaaaaaaaaaa, no nowt- taaaaaaaaaaauuaa", "mmmnn, make my tummy wummy feel bwettr", "ooooouuugghh, just f##k me auullreadyy", "ooooooooooo, du u wanna ride wme", "aaaauuuuooogh, im rweally hungee", "uuwu, ooouuaa, f##k, f##k uuaaauuuukkkkk uu", "mmmmnnnauuuggghuuuauaaaauaaaa, f##k uuuaa a", "rawr xd, my fellow gwamers, meow", "**HHAAAHAHAAHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHAHHAHAHAAHAHAHAHHAHAHAHAH**", "F##k AAA A AUAF, UUUUWWUWUAAAAAGHHHAA", "mnnmmnnmmnn, thvwaughts bwetter"]


bot.on('message', msg=>
{
    if(msg.content === "furry owo")
    {
        var response = furryowouwu[Math.floor(Math.random()*furryowouwu.length)];
        msg.channel.send(response).then().catch(console.error);
    }
})

bot.on('message', msg=>
{
    if(msg.content === "furry uwu")
    {
        var response = furryowouwu[Math.floor(Math.random()*furryowouwu.length)];
        msg.channel.send(response).then().catch(console.error);
    }
})

bot.login(token);