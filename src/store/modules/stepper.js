const state = {
  stepper_position: 0,
  stepper_0_valid: false,
  stepper_1_valid: false
}

const getters = {}

const actions = {}

const mutations = {
  SUBMIT_STEPPER: state => {
    state.stepper_position += 1
  },
  BACK_TO_PREVIOUS_PAGE: (state, payload) => {
    state.stepper_position = payload
  },
  ALLOW_GO_TO_1: (state) => {
    state.stepper_0_valid = true
  },
  ALLOW_GO_TO_2: (state) => {
    state.stepper_1_valid = true
  },
  DISALLOW_GO_TO_1: (state) => {
    state.stepper_0_valid = false
  },
  DISALLOW_GO_TO_2: (state) => {
    state.stepper_1_valid = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}