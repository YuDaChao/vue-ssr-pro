export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  CLEAR_USER (state) {
    state.user = ''
  }
}

export const actions = {
  handleLogin ({ commit }, user) {
    commit('SET_USER', user)
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

