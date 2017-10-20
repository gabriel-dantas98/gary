var Botkit = require("/usr/local/lib/node_modules/botkit");
var fs = require('fs');
var WebClient = require('/usr/local/lib/node_modules/@slack/client').WebClient;
const publicIp = require('/usr/local/lib/node_modules/public-ip');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    
	token: 'xoxb-191251446178-Cl8fvHHaFWf8SrR2i7Y0RK7K'
    
}).startRTM();

controller.hears(['public-ip'], 'direct_message, direct_mention, mention', function(bot, message){
    publicIp.v4().then(ip => {
       bot.reply(message, ip);
    });    
})

controller.hears(['ta vivo', 'ta morto', 'ta vivo?', 'ta morto?'],'direct_message, direct_mention, mention', function(bot, message){

	bot.reply(message, 'to lek');
})

controller.hears(['boruto insight', 'yura yura', 'fezinho'], 'direct_message,direct_mention,mention', function(bot, message) {
    var youtubeBoruto = "https://www.youtube.com/watch?v=9iL_QkzNQ94";
    for(var i = 0; i < 3; i++){
        bot.reply(message, youtubeBoruto);
    }
     
})

controller.hears(['build-upload'], 'direct_message,direct_mention,mention', function(bot, message) {
    
    const exec = require('child_process').exec;
    var yourscript = exec('sh build-start.sh',
            (error, stdout, stderr) => {
               console.log(`${stdout}`);
               console.log(`${stderr}`);
                if (error !== null) {
                     console.log(`exec error: ${error}`);
                }
            });

    
    var token = 'xoxp-190584162307-191481662663-259737531861-0dcfdbb7f18b2181f17a2fa61e6528e7';   

    bot.reply(message,'Segura ae que eu vo buscar...');

    var web = new WebClient(token);
    var filePath = '/home/gabriel/pyLab/bin/MyApplication-0.1-debug.apk';
    var fileName = 'MyApplication-0.1-debug.apk';

    var streamOpts = {
        file: fs.createReadStream(filePath),
        channels: ['gary-build']
    };
    
    web.files.upload(fileName, streamOpts, function handleStreamFileUpload    (err, res) {
       console.log(res);
    });
	
   bot.reply(message, 'Pronto pode ir no #gary-build ir buscar -.-');
     
})






