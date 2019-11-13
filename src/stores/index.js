import GeolocationStore from './GeolocationStore';
import AuthStore from './AuthStore';
import QuizStore from './QuizStore'
import UiStore from './UiStore'

const geolocationStore = new GeolocationStore();
const authStore = new AuthStore();
const quizStore = new QuizStore(geolocationStore)
const uiStore = new UiStore()

const stores = {
  geolocationStore,
  authStore,
  quizStore,
  uiStore,
};

export default stores;
