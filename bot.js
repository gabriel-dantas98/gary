var Botkit = require("/usr/local/lib/node_modules/botkit");
var fs = require('fs');
var WebClient = require('/usr/local/lib/node_modules/@slack/client').WebClient;
const publicIp = require('/usr/local/lib/node_modules/public-ip');
var dateTime = require('/usr/local/lib/node_modules/node-datetime');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    
	token: 'xoxb-191251446178-xCwWEz1JgRU1JQSX8yeC8W4F'
    
}).startRTM();

controller.hears(['public-ip'], 'direct_message, direct_mention, mention', function(bot, message){
    publicIp.v4().then(ip => {
       bot.reply(message, ip);
    });    
})

controller.hears(['teleport'], 'direct_message, direct_mention, mention', function(bot, message){

   var token2 = 'xoxb-191251446178-xCwWEz1JgRU1JQSX8yeC8W4F';
   var web = new WebClient(token2);
   
   web.chat.postMessage('C7M6D27GU', '*Omae Wa Mou Shindeiru*', function(err, res) {
	if (err) {
	  console.log('Error:', err);
	} else {
	  console.log('Message sent: ', res);
	}
    });
})

controller.hears(['time'], 'direct_message, direct_mention, mention', function(bot, message){

		var dt = dateTime.create();
		var formatted = dt.format('Y-m-d H:M:S');
		console.log(formatted);
		bot.reply(message, formatted);
		})

controller.hears(['ta vivo', 'ta morto', 'ta vivo?', 'ta morto?'],'direct_message, direct_mention, mention', function(bot, message){

		bot.reply(message, '*to lek* :snail:');
})

controller.hears(['boruto insight', 'yura yura', 'fezinho'], 'direct_message,direct_mention,mention', function(bot, message) {
    var youtubeBoruto = "https://www.youtube.com/watch?v=9iL_QkzNQ94";
    for(var i = 0; i < 3; i++){
        bot.reply(message, youtubeBoruto);
    }
     
})

controller.hears(['build-upload', 'build'], 'direct_message,direct_mention,mention', function(bot, message) {
    
    const exec = require('child_process').exec;
    var yourscript = exec('sh build-start.sh',
            (error, stdout, stderr) => {
               console.log(`${stdout}`);
               console.log(`${stderr}`);
                if (error !== null) {
                     console.log(`exec error: ${error}`);
                }
            });

    
    var token = 'xoxp-190584162307-191481662663-259705130018-d553665fce22b41d96e24b6ad71510cb';   

    bot.reply(message,'Segura ae que eu vo buscar... :runner:');
    
    var dt = dateTime.create();
    var formatted = dt.format('d-m|H:M:S');
    var type = '.apk';

    var web = new WebClient(token);
    var filePath = '/home/gabriel/pyLab/bin/MyApplication-0.1-debug.apk';
    var fileName = formatted.concat(type);
    console.log(fileName);
    var streamOpts = {
        file: fs.createReadStream(filePath),
        channels: ['gary-build']
    };
    
    web.files.upload(fileName, streamOpts, function handleStreamFileUpload (err, res) {
       console.log(res);
	bot.reply(message, '*Terminei parça! :sunglasses:*');
    
    var token2 = 'xoxb-191251446178-xCwWEz1JgRU1JQSX8yeC8W4F';
    var web2 = new WebClient(token2);

    web2.chat.postMessage('C7M6D27GU', '*DONE BUILD LEK!*', function(err, res) {
        if (err) {
          console.log('Error:', err);
        } else {
          console.log('Message sent: ', res);
        }
    });	 
  });
})





