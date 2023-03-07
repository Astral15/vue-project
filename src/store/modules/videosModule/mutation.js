const mutations = {
    NEW_SEARCH_KEY(state,payload) {
        state.searchValue = payload.toLowerCase()
    }
}

export default mutations