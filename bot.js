var Botkit = require("/usr/local/lib/node_modules/botkit");
var fs = require('fs');
var WebClient = require('/usr/local/lib/node_modules/@slack/client').WebClient;
const publicIp = require('/usr/local/lib/node_modules/public-ip');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    
    token: 'xoxb-191251446178-cbOvvCgZrvNuoiv2iSq839k7'
    
}).startRTM();

controller.hears(['public-ip'], 'direct_message, direct_mention, mention', function(bot, message){
    publicIp.v4().then(ip => {
       bot.reply(message, ip);
    });    
})

controller.hears(['boruto insight', 'yura yura', 'fezinho'], 'direct_message,direct_mention,mention', function(bot, message) {
    var youtubeBoruto = "https://www.youtube.com/watch?v=9iL_QkzNQ94";
    for(var i = 0; i < 5; i++){
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
    
    var token = 'xoxp-190584162307-191481662663-238070906900-e03211abbb2f9987a5c9d80b7c7c5e94';

    bot.reply(message,'Uploading...');

    var web = new WebClient(token);
    var filePath = '/home/gabs/Documentos/upload/publicIp.py';
    var fileName = 'publicIp.py';

    var streamOpts = {
        file: fs.createReadStream(filePath),
        channels: ['zettamemes']
    };
    
    web.files.upload(fileName, streamOpts, function handleStreamFileUpload    (err, res) {
       console.log(res);
    });
     
})






