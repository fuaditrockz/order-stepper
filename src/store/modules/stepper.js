const state = {
  stepper_position: 0
}

const getters = {}

const actions = {}

const mutations = {
  SUBMIT_DELIVERY_DETAILS: state => {
    state.stepper_position += 1
    console.log('MOVE TO SHIPMENT & PAYMENT', state.stepper_position)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}