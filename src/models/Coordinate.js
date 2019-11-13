import { decorate, observable } from 'mobx'
import Model from './Model'

class Coordinate extends Model {
  constructor(props) {
    const defaults = {
      accuracy: 0,
      altitude: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
      timeStamp: 0,
    }
    super({ ...defaults, ...props })
  }
}

decorate(Coordinate, {
  accuracy: observable,
  altitude: observable,
  heading: observable,
  latitude: observable,
  longitude: observable,
  speed: observable,
  timeStamp: observable,
})

export default Coordinate
