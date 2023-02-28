const actions = {
    NewVideos({commit} , payload) {
        if(payload.lenght > 2) {
            commit('NEW_SEARCH_KEY' , payload)
        }else {
            commit('NEW_SEARCH_KEY' , null)
        }
    }
}

export default actions