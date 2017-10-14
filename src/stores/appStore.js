import { action, computed, observable } from 'mobx'

class AppStore {
	@observable
	questions = localStorage.getItem('questions')
}
const store = new AppStore()
export default store
