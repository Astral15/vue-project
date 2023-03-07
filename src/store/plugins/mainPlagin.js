import mainModule from "../modules/mainModule"
import menuModule from "../modules/menuModule"

const mainPlugin = (store) => {
  store.registerModule('main' , mainModule)
  store.registerModule('menu' , menuModule)

}

export default mainPlugin