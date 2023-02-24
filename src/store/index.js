import mainPlugin from "./plugins/mainPlagin"
import { createStore } from 'vuex'

const store = createStore({
    Plugins: [ mainPlugin ]
})
export default store