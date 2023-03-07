const registerModule = {
  namespaced: true,
  state() {
    return {
      authenticated: null,
      users: [
        {
          id: 1,
          name: "",
          email: "",
          password: "",
        },
      ],
    };
  },
  getters: {
    authenticatedUser(state) {
      return state.authenticated
    },
  },
  mutations: {
    AUTHANTICATE(state, payload) {
      let user = state.user.filter((val) => val.email === payload.email)
      if (user.password === payload.password) {
        state.authenticated = user
      }
    },
    REGISTER_NEW_USER(state, payload) {
      state.user.push(payload)
    },
    UPDTAE_USER(state, payload) {
      state.user.find(user => state.authenticated.id === user.id).name = payload.name
      state.user.find(user => state.authenticated.id === user.id).email = payload.email
      state.user.find(user => state.authenticated.id === user.id).password = payload.password
    }
  },
  actions: {
    authenticate({ commit }, payload) {
      commit(AUTHANTICATE, payload)
    },
    register({ commit }, payload) {
      commit("REGISTER_NEW_USER", payload)
      commit("AUTHANTICATE", payload)
    },
    updateUser({commit}, payload) {
      commit("UPDTAE_USER",payload)
    },
  },
};

export default registerModule