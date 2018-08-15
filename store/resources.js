export const state = () => ({
  list: []
})

export const mutations = {
  SET_RESOURCES (state, resources) {
    state.list = resources
  }
}

export const getters = {

}

export const actions = {
  getResources ({ commit }) {
    commit('SET_RESOURCES', [{id: '1'}])
  }
}
