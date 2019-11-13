import { observable, action } from 'mobx'

class QuizStore {
  @observable currentAnswer = undefined

  @observable correctAnswer = undefined

  @observable alertVisible = false

  @observable alertMessage = ''

  @observable alertTitle = ''

  geolocationStore = undefined

  constructor(_geolocationStore) {
    this.geolocationStore = _geolocationStore
  }

  @action
  closeAlert = () => {
    this.alertVisible = false
  }

  @action
  setAnswer = (value) => {
    this.currentAnswer = value
  }

  @action
  setCorrectAnswer = (value) => {
    this.correctAnswer = value
  }

  @action
  evaluateAnswer = () => {
    if (this.currentAnswer === this.correctAnswer) {
      this.alertVisible = true
      this.alertMessage = 'You got the correct answer!'
      this.alertTitle = 'CORRECT!'
    } else {
      this.alertVisible = true
      this.alertMessage = 'Sorry, but you made a wrong answer, better luck next time.'
      this.alertTitle = 'MISTAKE!'
    }

    const index = this.geolocationStore.listQuestions.findIndex(x => x.question === this.geolocationStore.currentQuestion.question)
    this.geolocationStore.listQuestions.splice(index, 1)
    
  }

}

export default QuizStore
