const actions = {
    newMenu(state) {
        if(state.menuOn == false) {
            return !state.menuOn
        }
        else {
            return state.menuOn
        }
    }
}
export default actions