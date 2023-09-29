
//MENSAJES
const chatDisplay = document.getElementById("chat-display");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = message;
    chatDisplay.appendChild(newMessage);
    messageInput.value = "";
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
  }
});

messageInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage("user", message);
      messageInput.value = " ";
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });
  
