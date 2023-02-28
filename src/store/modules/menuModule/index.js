import getter from "./getter"
import mutations from "./mutation"
import actions from "./actions"
const menu = {
    name: true,
    state() {
        return {
            menuOn: true,
        }
    },
    getter,
    mutations,
    actions
}

export default menu
