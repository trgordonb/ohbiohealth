import axios from 'axios';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();

      if (lowercase.includes('done')) {
        if (this.state.step === 2) {
          console.log('State: ',this.state);
          axios['put'](`/api/profiles/${this.state.userId}`, { 
              gender: this.state.gender
          })
          .then(response => {
            console.log('Response: ',response)
          })
          this.actionProvider.handleGoodbye();
        } 
      } else {
        this.actionProvider.handleUnknown();
      }
    }
}

export default MessageParser