import axios from 'axios';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if (!this.state.userId) {
        this.actionProvider.handleUnauthenticated()
      } else if (this.state.step >= 6) {
        let points = message.replace(/\s+/g, '')
        let re = /^(\d+(,\d+)*)?$/gm
        if (!points.match(re)) {
          this.actionProvider.handleBadInput()
        } else {
          let pointsArr = []
          let invalid = false
          points.split(',').forEach(point => {
            let parsed = parseInt(point)
            if (parsed >= 1 && parsed <= 10) {
              pointsArr.push(parsed)
            } else {
              invalid = true
            }
          })
          if (invalid) {
            this.actionProvider.handleInvalidInput()
          } else {
            console.log('Points: ', pointsArr)
            console.log('State: ',this.state);
            axios['post'](`/api/profiles/painconditions`, { 
              muscleache: this.state.muscleache,
              needlesensation: this.state.needlesensation,
              burningsensation: this.state.burningsensation,
              numbsensation: this.state.numbsensation
            })
            .then(response => {
              console.log('Response: ',response)
            })
            this.actionProvider.handleGoodbye()
          }
        }      
      } 
    }
}

export default MessageParser