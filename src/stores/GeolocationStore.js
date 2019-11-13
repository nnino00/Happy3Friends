import { observable, action } from 'mobx'
import { PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Coordinate from '../models/Coordinate'
import Question from '../models/Question'

class GeolocationStore {
  @observable currentLocation = undefined

  @observable latitude = 0

  @observable longitude = 0

  @observable listQuestions = []

  @observable currentQuestion = undefined

  watchQuestions = undefined

  constructor() {
    this.initialize()
    this.generateQuestion()
  }

  @action
  getLatitude = () => this.currentLocation.latitude

  @action
  getLongitude = () => this.currentLocation.longitude

  constQuestions = [
    { question: 'What is 1 + 1?', choices: ['5', '3', '6', '2'], answer: '2'},
    { question: 'Which one is a Primary Color?', choices: ['red', 'green', 'black', 'orange'], answer: 'red'},
    { question: 'What is the powerhouse of a cell?', choices: ['Cell Wall', 'Cytoplasm', 'Mitochondria', 'Ribosomes'], answer: 'Mitochondria'},
    { question: 'Which school did Harry Potter attended?', choices: ['CPU', 'Ateneo', 'Harvard', 'Hogwarts'], answer: 'Hogwarts'},
    { question: 'Which big country is closest to New Zealand?', choices: ['Australia', 'China', 'US', 'Africa'], answer: 'Australia'},
    { question: 'How many colours are in a rainbow?', choices: ['12', '9', '7', '4'], answer: '7'},
    { question: 'Pharaoh is the title given to the rulers of which ancient county?', choices: ['Russia', 'Egypt', 'Philippines', 'Singapore'], answer: 'Egypt'},
    { question: 'How many years are there in a millennium?', choices: ['10', '100', '1000', '10000'], answer: '1000'},
    { question: 'What is the name of the fairy in Peter Pan?', choices: ['Xayah', 'Lina', 'Miya', 'Tinkerbell'], answer: 'Tinkerbell'},
  ]

  @action
  initialize = () => {
    console.log('ASKING FOR PERMISSION')
    this.askLocationPermission().then((granted) => {
      console.log('PERMISSION: ', granted)
      if (granted) {
        this.getCurrentLocation()
      }
    })
  }

  @action
  askLocationPermission = () => new Promise(async (resolve) => {

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'StudyGo',
        message: 'StudyGo is requesting to know your location',
      },
    )

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      resolve(true)
    }
      resolve(false)
    }
  )

  @action
  getCurrentLocation = () => {
    console.log('GETTING CURRENT LOCATION')
    Geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, '')
    Geolocation.watchPosition(this.geoSuccess, this.geoFailure, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
      distanceFilter: 1,
    })
  }

  geoSuccess = (position) => {
    this.currentLocation = new Coordinate(position.coords)
    this.currentLocation.setProperty('timeStamp', new Date())
    console.log('THE USER MOVED', this.currentLocation)

    this.latitude = this.currentLocation.latitude
    this.longitude = this.currentLocation.longitude
  }

  geoFailure = (err) => {
    console.log(err)
  }

  generateQuestion = () => {
    this.watchQuestions = setInterval(() => {
      if (this.listQuestions.length < 3) {
        const newQuestion = new Question()

        const latitude = this.generateRandomCoordinate(this.latitude)
        const longitude = this.generateRandomCoordinate(this.longitude)

        question = this.constQuestions[Math.floor((Math.random() * 7) + 0)]

        newQuestion.setProperty('latitude', latitude)
        newQuestion.setProperty('longitude', longitude)
        newQuestion.setProperty('question', question.question)
        newQuestion.setProperty('choices', question.choices)
        newQuestion.setProperty('answer', question.answer)

        this.listQuestions.push(newQuestion)

        console.log('QUESTIONS', this.listQuestions)
      }
    }, 10000)
  }

  generateRandomCoordinate = (degree) => {
    const randNum = Math.floor((Math.random() * 10) + 1)

    const PlusMinus = Math.floor((Math.random() * 2) + 1)

    if (PlusMinus === 2) {
      return degree + parseFloat(`0.000${randNum < 10 ? '0' + randNum.toString() : randNum.toString()}` )
    }

    if (PlusMinus === 1) {
      return degree - parseFloat(`0.000${randNum < 10 ? '0' + randNum.toString() : randNum.toString()}` )
    }
    
  }

  @action
  setQuestion = (question, callback) => {
    this.currentQuestion = question
    callback
  }

}

export default GeolocationStore
