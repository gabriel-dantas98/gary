var Botkit = require("/usr/local/lib/node_modules/botkit");
const publicIp = require('/usr/local/lib/node_modules/public-ip');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({

	token: 'xoxb-191251446178-UuxzHKNPFPKMUEnfWHLhQgP9'

}).startRTM();



controller.hears(['listaip','listIp','ubuntuzera','ubuntuzeraServer','servidores', 'ubuntuip', 'meuip'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.reply(message,"Lista de Ip's dos servidores");

    publicIp.v4().then(ip => {
        console.log(ip);
        //=> '46.5.21.123'
        var helloText = "*Ubuntuzera* é esse aqui lek ->" + ip;
        bot.reply(message, helloText);
    });   
    
});

controller.hears(['hello', 'eae', 'ta vivo?', 'morreu?', 'ta vivo'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Meooowwww!!!";

    bot.reply(message, helloText);
});

controller.hears(['instant idea', 'instant', 'algoritmo instantaneo', 'plow'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*instant algorithm ALERT!!!*";

    bot.reply(message, helloText);
});

controller.hears(['Paulo', 'Gabriel'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*VTNC slackbot -.-'*";

    bot.reply(message, helloText);
});

controller.hears(['randomNumber'], 'direct_message,direct_mention,mention', function(bot,message){
    
    for(var i = 0; i < 10; i++){
        var helloText = "Number = " + Math.floor((Math.random() * i) + 1);
        bot.reply(message, helloText);
    }
    
})

controller.hears(['for real'], 'direct_message,direct_mention,mention', function(bot,message){
    
    var scream = "*GO TO FOR REAL!!! PORRAAA!!*";

    bot.reply(message,scream);
    
})

controller.hears(['ovo', 'Ovo'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*MIAAAAAAAAAAAAAAAAAAAAU !!1!!1onze!!11*";

   bot.reply(message, helloText);
})

controller.hears(['kawaii', 'Kawaii', 'kawaii desu', 'Kawaii desu'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*Nyan nyan nyan nyan !!!*";

   bot.reply(message, helloText);
})


controller.hears(['gerdau', 'Gerdau', 'estagio', 'gg izi'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*Só vem Gerdauuu!!!!*";
    var scream = "*GO TO MINERCOIN BITCHHHH!!!*";
    var helloText1 = "*SÒ VEM FABIOOOOOOO!!! OPEN THE $#%$%@*";
   
   bot.reply(message,scream);
   bot.reply(message,helloText1); 
   bot.reply(message, helloText);
})


controller.hears(['gerdau', 'Gerdau', 'estagio', 'gg izi'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*Só vem Gerdauuu!!!!*";
    var scream = "*GO TO MINERCOIN BITCHHHH!!!*";
    var helloText1 = "*SÒ VEM FABIOOOOOOO!!! OPEN THE $#%$%@*";
   
   bot.reply(message,scream);
   bot.reply(message,helloText1); 
   bot.reply(message, helloText);
})

controller.hears(['gerdau', 'Gerdau', 'estagio', 'gg izi'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*Só vem Gerdauuu!!!!*";
    var helloText1 = "*SÒ VEM FABIOOOOOOO!!! OPEN THE $#%$%@*";

   bot.reply(message,helloText1); 
   bot.reply(message, helloText);
})

controller.hears(['boruto insight', 'yura yura', 'fezinho'], 'direct_message,direct_mention,mention', function(bot, message) {
    var boruto = "https://www.facebook.com/Otakando111/videos/vb.714255878623096/1325485490833462/?type=2&theater&notif_t=mentions_reply&notif_id=1496017737429027";
    var youtubeBoruto = "https://www.youtube.com/watch?v=9iL_QkzNQ94";
    for(var i = 0; i < 5; i++){
        bot.reply(message, youtubeBoruto);
    }
     
})

controller.hears(['password','passwordList', 'pass', 'senhas'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "*Udemy - loed_0@hotmail.com | forreal767020*";
     
   bot.reply(message, helloText);
})


controller.hears(['lista magrelin'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "https://docs.google.com/document/d/13ACcHll8BGDArQXb9pjFNbtUn_Xls_WYVCqgF11HNms/edit";
     
   bot.reply(message, helloText);
})


controller.hears(['lista magrelin'], 'direct_message,direct_mention,mention', function(bot, message) {
    var anaozinCreed = "https://youtu.be/sPAeJATIyYU";

    bot.reply(message, "*Tyrion Last Breath!!!*")

    for(var i = 0; i < 6; i++){
    bot.reply(message, anaozinCreed);
    };
})








