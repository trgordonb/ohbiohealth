class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage, stateRef) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
  }

  setChatbotMessage = (message, newstate, isError=false) => {
      let stateKey = Object.keys(newstate).length === 1 ? Object.keys(newstate)[0] : null
      let stateValue = Object.values(newstate).length === 1 ? Object.values(newstate)[0] : null
      if (!isError) {
        if (stateKey && stateValue) {
          this.setState((state) => ({
            ...state,
            [stateKey]: stateValue,
            step: state.step + 1,
            messages: [...state.messages, message],
          }))
        } else {
          this.setState((state) => ({
            ...state,
            step: state.step + 1,
            messages: [...state.messages, message]
          })
        )}
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, message]
        }))
      } 
  }

  setPainPosition = (newPos) => {
    this.setState((state) => ({
      ...state,
      painpoints: [...state.painpoints, newPos]
    }))
  }

  setClientMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }))
  }
  
  handleYes = () => {
    const reply = this.createClientMessage(this.stateRef.t('y'))
    this.setClientMessage(reply)
    if (this.stateRef.step === 1) {
      const message = this.createChatbotMessage(this.stateRef.t('q2'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { muscleache: true });
    } else if (this.stateRef.step === 2) {
      const message = this.createChatbotMessage(this.stateRef.t('q3'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { needlesensation: true });
    } else if (this.stateRef.step === 3) {
      const message = this.createChatbotMessage(this.stateRef.t('q4'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { burningsensation: true });
    } else if (this.stateRef.step === 4) {
      const message1 = this.createChatbotMessage(this.stateRef.t('p1'), { withAvatar: false, delay: 500, widget: 'bodydiagram'})
      this.setChatbotMessage(message1, { numbsensation: true });
      const message2 = this.createChatbotMessage(this.stateRef.t('p2'))
      this.setChatbotMessage(message2, {})
    }
  }

  handleNo = () => {
    const reply = this.createClientMessage(this.stateRef.t('n'))
    this.setClientMessage(reply)
    if (this.stateRef.step === 1) {
      const message = this.createChatbotMessage(this.stateRef.t('q2'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { muscleache: false });
    } else if (this.stateRef.step === 2) {
      const message = this.createChatbotMessage(this.stateRef.t('q3'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { needlesensation: false });
    } else if (this.stateRef.step === 3) {
      const message = this.createChatbotMessage(this.stateRef.t('q4'), { withAvatar: false, delay: 500, widget: "yesno" });
      this.setChatbotMessage(message, { burningsensation: false });
    } else if (this.stateRef.step === 4) {
      const message1 = this.createChatbotMessage(this.stateRef.t('p1'), { withAvatar: false, delay: 500, widget: 'bodydiagram'})
      this.setChatbotMessage(message1, { numbsensation: false });
      const message2 = this.createChatbotMessage(this.stateRef.t('p2'))
      this.setChatbotMessage(message2, {})
    } 
  }

  handleNextDiagram = (nextPart, tmpResult) => {
    const message = this.createChatbotMessage(this.stateRef.t('morediagram'), { withAvatar: false, delay: 500, widget: 'bodydiagram'})
    this.setPainPosition(tmpResult)
    this.setChatbotMessage(message, { bodyPart: nextPart })
  }

  handleGoodbye = () => {
    const message = this.createChatbotMessage(this.stateRef.t('q5'))
    this.setChatbotMessage(message, {})
  }

  handleBadInput = () => {
    const message = this.createChatbotMessage(this.stateRef.t('e1'))
    this.setChatbotMessage(message, {}, true)
  }

  handleInvalidInput = () => {
    const message = this.createChatbotMessage(this.stateRef.t('e2'))
    this.setChatbotMessage(message, {}, true)
  }

  handleUnauthenticated = () => {
    const message = this.createChatbotMessage(this.stateRef.t('plslogin'))
    this.setChatbotMessage(message, {})
  }

  handlePainResult = (results) => {
    let resultstr = results.map(result => this.stateRef.t(result)).join(',')
    const message = this.createChatbotMessage(`${this.stateRef.t('possible')}${resultstr}`)
    this.setChatbotMessage(message, {})
  }

  handleNoResult = () => {
    const message = this.createChatbotMessage(this.stateRef.t('noresult'))
    this.setChatbotMessage(message, {})
  }
}

export default ActionProvider;