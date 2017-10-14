import { action, computed, observable } from 'mobx'

class BirdStore {
  @observable
  birds = localStorage.getItem('birds')
    ? JSON.parse(localStorage.getItem('birds'))
    : []

  @action
  saveToLocal = () => {
    localStorage.setItem('birds', JSON.stringify(this.birds))
  }
  @action
  clearSaved = () => {
    this.birds = []
    localStorage.setItem('birds', [])
  }

  @action
  addBird = bird => {
    !bird ? (this.birds = this.birds) : this.birds.push(bird)
    this.saveToLocal()
  }

  @action
  clearBirds = () => {
    this.birds = []
  }

  @computed
  get birdCount() {
    return this.birds.length
  }
}
const store = new BirdStore()
export default store
