import { removeCookie } from '../util/auth'
export const state = () => {
  return {
    user: {}
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
  },
  logout ({ commit }) {
    commit('SET_USER', '')
    removeCookie()
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

