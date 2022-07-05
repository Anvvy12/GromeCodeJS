const callbackPrompt = {
  message: "Tell your number",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

// Test Data
callbackPrompt.showDeferredPrompt(1000);
