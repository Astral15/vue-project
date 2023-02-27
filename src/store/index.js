import mainPlugin from "./plugins/mainPlagin"
import VideoPlugin from './plugins/Videos'
import { createStore } from 'vuex'

const store = createStore({
  Plugins: [mainPlugin , VideoPlugin],
})
export default store