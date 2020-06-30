const state = {
  purchase_items: [
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
  ],
  delivery_details: {
    email: null,
    phone_number: null,
    address: null,
    dropshipper: {
      is_dropshipper: false,
      name: null,
      phone_number: null
    }
  },
  shipment_vendor: null,
  payment_method: null
}

const getters = {
  GET_TOTAL_PURCHASE: state => {
    let amount = 0
    state.purchase_items.forEach(item => {
      amount += item.price
    })
    return amount
  }
}

const actions = {}

const mutations = {
  SETUP_DROPSHIPPER: (state, payload) => {
    state.delivery_details.dropshipper.is_dropshipper = payload
  },
  UPDATE_DELIVERY_DETAILS: (state, payload) => {
    const deliveryDetails = state.delivery_details
    switch (payload.id) {
      case 'email':
        deliveryDetails.email = payload.value
        break;
      case 'phone_number':
        deliveryDetails.phone_number = payload.value
        break;
      case 'address':
        deliveryDetails.address = payload.value
        break;
      case 'dropshipper_name':
        deliveryDetails.dropshipper.name = payload.value
        break;
      case 'dropshipper_phone_number':
        deliveryDetails.dropshipper.phone_number = payload.value
        break;
      default:
        console.log('Error, dont have any payload')
        break;
    }
  },
  SUBMIT_DELIVERY_DETAILS: (state, payload) => {
    console.log('STATE', state)
    console.log('PAYLOAD', payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}