import mainModule from "../modules/mainModule"

const mainPlugin = () => {
  store.registerModule('main' , mainModule)
}

export default mainPlugin