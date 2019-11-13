import { observable, action } from 'mobx'

class UiStore {
  @observable rankingVisible = false

  @action
  closeRankings = () => {
    this.rankingVisible = false
  }

  @action
  openRankings = () => {
    this.rankingVisible = true
  }
}

export default UiStore
