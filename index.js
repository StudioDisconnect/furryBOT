const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAxODA2MjcyODI3NzUyNDQ5.XTQscQ.9rEDUml16tmYR9l0CsTgOWO9o6k';

bot.on('ready', () =>
{
   console.log('Index.js has been uploaded to discords servers!')
   bot.user.setGame('some weird furry game')
   bot.user.setStatus('dnd')
})

bot.on('message', msg=>
{
    if(msg.content === "furry welcome")
    {
        msg.reply('**WELCOME TO FURRY BOT**\n*Created by Kry (@IKrySometimes on twitter)*\nJoin our discord server to help improve this bot :upside_down:\nhttps://discord.gg/dzGBY3f');
    }
})

bot.on('message', msg=>
{
    if(msg.content === "furry help")
    {
        msg.reply('**FURRY BOT HELP**\nfurry copypasta: For-some epic copypasta quotes\nfurry nsfw: 18+ quotes ;), not safe for work\nfurry uwu / owo: The main owo/uwu furry quotes\nfurry credit: For people who want to know, who tf made this \n furry gamer help: Some gamer tips\nfurry help: this...\nfurry photos: speaks for itself\nfurry welcome: invites you into our FurryBOT DEV server');
    }
})

var furryimages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Otakuthon_2014_%2814850728278%29.jpg/220px-Otakuthon_2014_%2814850728278%29.jpg", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjzgvnD18rjAhUS1BoKHUleCj0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.cnn.com%2F2018%2F11%2F14%2Fus%2Ffurries-culture%2Findex.html&psig=AOvVaw2kwh1cPws4cd-G_WGqmbmK&ust=1563958980545233", "https://www.upressonline.com/wp-content/uploads/2019/02/furry-featured-900x600.jpg", "https://dazedimg-dazedgroup.netdna-ssl.com/747/azure/dazed-prod/1260/7/1267894.jpg", "https://ichef.bbci.co.uk/images/ic/320xn/p06h3ymt.jpg", "https://www.paisano-online.com/wp-content/uploads/2018/01/15621833_367586243604160_4279087299539152048_n.jpg", "https://media2.s-nbcnews.com/i/MSNBC/Components/Video/140812/p_furries_140811.jpg", "https://thehardtimes.net/wp-content/uploads/2019/03/furry.jpg", "9https://d.newsweek.com/en/full/1323071/discord-furry-moderator-abuse-image-quackityhd.png?w=1600&h=1600&q=88&f=f1df672f2c3eeb15e90ecebda32f6c6c", "https://media1-production-mightynetworks.imgix.net/asset/3804752/676133b4351b90e6b42a439b75aceebd.jpg?ixlib=rails-0.3.0&fm=jpg&q=100&auto=format&w=1002&h=1002&fit=crop&crop=faces&mask=ellipse",
"https://m.media-amazon.com/images/M/MV5BNTcyOGQ2MjgtNGIwYS00MDQ0LWJjOTAtZGRkZWQ0ZWFkYTRlXkEyXkFqcGdeQXVyNTcwMzkyNDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://www.dictionary.com/e/wp-content/uploads/2018/03/furries_ATW1-300x300.jpg", "https://www.furrysiesta.org/wp-content/uploads/2019/02/cropped-DSC03350.jpg", "https://ichef.bbci.co.uk/images/ic/320xn/p06h400m.jpg", "https://i.ytimg.com/vi/m6bevb51o-0/maxresdefault.jpg", "https://fsmedia.imgix.net/00/c2/8c/07/1805/4418/8c72/b854af464fe7/1280298510651460268822887973333272483120196njpg.jpeg?rect=198%2C0%2C630%2C315&auto=format%2Ccompress&dpr=2&w=630", "https://cdn.newsapi.com.au/image/v1/82e837bff6deb95994fbb17d9fb8b7ae", "90&h=530&fit=crop&auto=format&auto=compress&crop=faces", "https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_156%2Cy_210%2Cw_1209%2Ch_1612%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5bae1c384db3d70020c01c40%252FfireflyWolfy.jpg", "https://dazedimg-dazedgroup.netdna-ssl.com/557/azure/dazed-prod/1260/7/1267892.jpg"];


bot.on('message', msg=>
{
    if(msg.content === "furry photos")
    {
        var response = furryimages[Math.floor(Math.random()*furryimages.length)];
        msg.channel.send(response).then().catch(console.error);
    }
})

bot.login(token);