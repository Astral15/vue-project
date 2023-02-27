import mainModule from "../modules/mainModule"
import menuModule from "../modules/menuModule"

const mainPlugin = () => {
  store.registerModule('main' , mainModule)
  store.registerModule('menu' , menuModule)

}

export default mainPlugin