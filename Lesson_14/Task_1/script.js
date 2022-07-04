let message = "Just learn it";

function sendMessage(name) {
  console.log(`${name}, ${message}! Your GromCode`);
}

function setMessage(text) {
  message = text;
}

// test data

sendMessage("Tom");
setMessage("Goob job");
sendMessage("Tom");
//--------------------
sendMessage("Mark");
setMessage("You are the best");
sendMessage("Mark");
//--------------------
sendMessage("Ann");
setMessage("Well done");
sendMessage("Ann");
