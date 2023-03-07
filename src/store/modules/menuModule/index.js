import getters from "./getters"
import mutations from "./mutation"
import actions from "./actions"
const menu = {
    namespaced: true,
    state() {
        return {
            menuOn: true,
        }
    },
    getters,
    mutations,
    actions
}

export default menu
