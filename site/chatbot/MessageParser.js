import axios from 'axios';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      this.errorState = ''
      this.resultArr = []
      this.maxResponse = { front: 16, back: 14, left: 8, right: 8 }
    }

    checkBadInput(message) {
      if (message.toLowerCase() === 'n') {
        this.resultArr = []
      } else {
        let points = message.replace(/\s+/g, '')
        let re = /^(\d+(,\d+)*)?$/gm
        if (!points.match(re)) {
          this.errorState = 'BadInput'
        } else {
          let pointsArr = []
          let isInvalid = false
          points.split(',').forEach(point => {
            let parsed = parseInt(point)
            if (parsed >= 1 && parsed <= this.maxResponse[this.state.bodyPart]) {
              pointsArr.push(parsed)
            } else {
              isInvalid = true
            }
          })
          if (isInvalid) {
            this.errorState = 'InvalidInput'
          } else {
            this.resultArr = pointsArr
          }
        }
      }
    }

    postResult() {
      this.state.painpoints.push(this.resultArr)
      console.log('resultArray: ', this.state.painpoints)
      axios['post'](`/api/engine/painanalysis`, { 
        muscleache: this.state.muscleache,
        needlesensation: this.state.needlesensation,
        burningsensation: this.state.burningsensation,
        numbsensation: this.state.numbsensation,
        painpositions: this.state.painpoints
      })
      .then(response => {
        if (response.statusText === 'OK') {
          this.actionProvider.handlePainResult(response.data)
        } else {
          this.actionProvider.handleNoResult()
        }
      })
      this.actionProvider.handleGoodbye()
    }

    takeAction(lastQuestion) {
      if (this.errorState === 'BadInput') {
        this.actionProvider.handleBadInput()
      } else if (this.errorState === 'InvalidInput') {
        this.actionProvider.handleInvalidInput()
      } else if (!lastQuestion) {
        let nextPart = 'front'
        switch (this.state.step) {
          case 6:
            nextPart = 'back'
            break
          case 7:
            nextPart = 'left'
            break
          case 8:
            nextPart = 'right'
            break
          default:
            break
        }
        this.actionProvider.handleNextDiagram(nextPart, this.resultArr)
      } else {
        this.postResult()
      }
    }
  
    parse(message) {
      if (!this.state.userId) {
        this.actionProvider.handleUnauthenticated()
      } else if (this.state.step >= 6 && this.state.step < 9) {
        this.checkBadInput(message)
        this.takeAction(false)
      } else {
        this.checkBadInput(message)
        this.takeAction(true)
      }
    }
}

export default MessageParser