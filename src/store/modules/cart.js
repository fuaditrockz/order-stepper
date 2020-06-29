const state = {
  purchases_item: [
    {
      name: "Ps3 Slim Sony + Hdd 500gb + 2 Stick Warlles + Full Games",
      price: 214800
    },
    {
      name: "PAKET PODCAST 4 ORANG Mic Microphone BM800 BM 800 Mixer Recording",
      price: 196500
    },
    {
      name: "PEWIE TR-560-12 SPEAKER MEETING PORTABLE 12 INCH MIC WIRELESS - BLUETOOTH TR560",
      price: 143920
    }
  ]
}

const getters = {
  total_goods_price: state => {
    let amount = 0
    state.purchases_item.forEach(item => {
      amount += item.price
    })
    return amount
  }
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}