import getter from "./getter"
import mutations from "./mutation"
const menu = {
    name: true,
    state() {
        return {
            menuOn: true,
        }
    },
    getter,
    mutations
}

export default menu
