export const state = () => ({
  modals: ''
})

export const getters = {
  modals(state) {
    return state.modals
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  openModal(state, payload) {
    state.modals = payload
  },
  closeModal(state) {
    state.modals = ''
  }
}
