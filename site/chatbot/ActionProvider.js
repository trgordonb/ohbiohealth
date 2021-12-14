class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    setChatbotMessage = (message, newstate) => {
        let stateKey = Object.keys(newstate).length === 1 ? Object.keys(newstate)[0] : null
        let stateValue = Object.values(newstate).length === 1 ? Object.values(newstate)[0] : null
        if (stateKey && stateValue) {
          this.setState((state) => ({
            ...state,
            [stateKey]: stateValue,
            step: state.step + 1,
            messages: [...state.messages, message]
          }))
        } else {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
          })
        )}
        
    }
    
    handleGenderMale = () => {
      const message = this.createChatbotMessage("We have updated your profile accordingly. Type done to save.");
      this.setChatbotMessage(message, { gender: 'male' });
    }

    handleGenderFemale = () => {
      const message = this.createChatbotMessage("We have updated your profile accordingly. Type done to save.");
      this.setChatbotMessage(message, { gender: 'female' });
    }

    handleUnknown = () => {
      const message = this.createChatbotMessage("Not sure what you mean, try again?");
      this.setChatbotMessage(message, { });
    };

    handleGoodbye = () => {
      const message = this.createChatbotMessage("Thanks for your time. Hope to hear from you soon.");
      this.setChatbotMessage(message, { });
    }
}
  
export default ActionProvider;