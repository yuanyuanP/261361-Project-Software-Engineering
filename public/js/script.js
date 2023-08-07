
var sendBtn = document.getElementById('sendBtn');
var textBox = document.getElementById('textBox');
var chatContainer = document.getElementById('chatContainer');
 
var user = {message:""};

var arrayOfPossibleMessage = [
  { message: "hi", response: "hello" },
  { message: "how are you", response: "I'm Good" },
  { message: "what is your name", response: "I'am BotBots" },
  { message: "where is cmu", response: "Thailand, Chiang Mai 50000" },
  
];

function sendMessage(userMessage){
    var messageElemant = document.createElement('div');
    messageElemant.style.textAlign = "right";
    messageElemant.style.margin = "10px";

    messageElemant.innerHTML = 
    "<span> User: </span>" + 
    "<span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElemant);
}

function BotBotsResponse(userMessage){

    var BotBotsMessage = "";
    
    if(userMessage.length > 2 || userMessage == "hi"){ 
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

            if(result.length > 0){
                var response = result[0].response;
                BotBotsMessage = response;
            }else{
                BotBotsMessage = "please send another message";
            }
    }else{
        BotBotsMessage = "please send a different message";
    }

    var messageElemant = document.createElement('div');
    messageElemant.innerHTML =
    "<span> BotBots: </span>" + 
    "<span>" + BotBotsMessage + "</span>";

    setTimeout(() => {
        chatContainer.appendChild(messageElemant);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000); //1sec

    

}

sendBtn.addEventListener('click', function(e){

    var userMessage = textBox.value;
    
    if(userMessage == ""){
        alert('please type message');
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textBox.value = "";
        sendMessage(userMessageText);  
        BotBotsResponse(userMessageText);

    }

})