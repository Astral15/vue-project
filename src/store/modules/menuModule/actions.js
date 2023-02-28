const actions = {
    newMenu(state) {
        if(state.menuOn == false) {
            return state.menuOff
        }
        else {
            return state.menuOn
        }
    }
}
export default actions