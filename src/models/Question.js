import { decorate, observable } from 'mobx'
import Model from './Model'

class Question extends Model {
  constructor(props) {
    const defaults = {
      latitude: 0,
      longitude: 0,
      question: '',
      choices: [],
      answer: '',
    }
    super({ ...defaults, ...props })
  }
}

decorate(Question, {
  latitude: observable,
  longitude: observable,
  question: observable,
  choices: observable,
  answer: observable,
})

export default Question
