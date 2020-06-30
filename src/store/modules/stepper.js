const state = {
  stepper_position: 0
}

const getters = {}

const actions = {}

const mutations = {
  SUBMIT_DELIVERY_DETAILS: state => {
    state.stepper_position += 1
    console.log('MOVE TO SHIPMENT & PAYMENT', state.stepper_position)
  },
  BACK_TO_PREVIOUS_PAGE: (state, payload) => {
    state.stepper_position = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}