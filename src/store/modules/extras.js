const state = {
  dropshipping_fee: 5900,
  shipments: [
    {
      id: "gosend",
      name: "GO-SEND",
      estimation: 0,
      price: 15000
    },
    {
      id: "jne",
      name: "JNE",
      estimation: 2,
      price: 9000
    },
    {
      id: "personalcounter",
      name: "Personal Counter",
      estimation: 1,
      price: 29000
    }
  ],
  payment_methods: [
    {
      id: "ewallet",
      name: "e-Wallet",
      remaining_balance: 1500000
    },
    {
      id: "banktransfer",
      name: "Bank Transfer"
    },
    {
      id: "virtualaccount",
      name: "Virtual Account"
    }
  ]
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}