const createMessenger = () => {
  let message = "Just learn it";
  let sender = "Gromcode";
  function sendMessage(name) {
    console.log(`${name}, ${message}! This message was sent by ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(sendBy) {
    sender = sendBy;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

export default createMessenger;
// test data
const messanger = createMessenger();
messanger.sendMessage("Bob");

const messanger1 = createMessenger();
messanger1.sendMessage("Anna");

const messanger2 = createMessenger();
messanger2.setMessage("You are learning JS and you do it well");
messanger2.sendMessage("Michael");

const messanger3 = createMessenger();
messanger3.setMessage("The weather is amazing today");
messanger3.setSender("Anna");
messanger3.sendMessage("Alex");
