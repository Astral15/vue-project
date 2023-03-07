import mainPlugin from "./plugins/mainPlagin"
import VideoPlugin from './plugins/videos'
import { createStore } from 'vuex'

const store = createStore({
  plugins: [mainPlugin , VideoPlugin],
})
export default store