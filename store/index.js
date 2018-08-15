import { SET_USER } from './mutation-types'

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  [SET_USER] (state, user) {
    state.user = user
  }
}

export const actions = {
  handleLogin ({ commit }, { userName, password }) {
    commit(SET_USER, { userName, password })
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}

