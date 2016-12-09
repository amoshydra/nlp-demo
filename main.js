
/*
 *
 *	initialize variables
 *
 */
var TelegramBot = require('node-telegram-bot-api');
var token = require('./data/config'); // Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});
var util = require('util');

// echo message
bot.onText(/\/echo (.+)/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/mooncaketime (.+)/, function (msg, match) {
	// 'msg' is the recieved message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message
	
	var chatID = msg.chat.id;
	var resp = getCaliTime();
	
	bot.sendMessage(chatID, resp);
});

bot.onText(/sgtime (.+)/, function (msg, match) {
	// 'msg' is the recieved message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message
	
	var chatID = msg.chat.id;
	var resp = getSGTime();
	
	bot.sendMessage(chatID, resp);
});

/*
bot.onText(/\/test (.+)/, function (msg, match) {
	// 'msg' is the recieved message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message
	
	var chatID = msg.chat.id;
	var testtime = parseInt(match[1]);
	var hourstr = "";
	//step 1: make < 0 hours positive = yesterday
	if(testtime < 16){
		testtime = testtime + 24;
		day = "yesterday";
	}
	
	//step 2: define what is yesterday
	if(testtime > 15 || testtime < 2 ){
		hourstr = "0";
	}
	
	//step 3: convert into california time
	hourstr = hourstr + testtime - 16;
	var resp = hourstr;
	
	bot.sendMessage(chatID, resp);
});
*/

//minus 16 hours from sg
function getCaliTime() {
	var date = new Date();
	var day = "Today";
	
	var hour = date.getHours();
	var hourstr = "";
	
	//step 1: make < 0 hours positive = yesterday
	if(hour < 16){
		hour = 24 + hour;
		day = "Yesterday";
	}
	
	//step 2: define what is yesterday
	if(hour > 15 || hour < 2 ){
		hourstr = "0";
	}
	
	//step 3: convert into california time
	hourstr = hourstr + hour - 16;
	
	var min = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;
	
	var sec = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;
	
	date = null;
	
	return day + ". " + hourstr + ":" + min + ":" + sec;
}

function getSGTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
	
	date = null;
	
    return hour + ":" + min + ":" + sec;

}

// code that will reply to ALL message
/*
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
  var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
*/