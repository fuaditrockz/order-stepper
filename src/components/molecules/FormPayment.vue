<template>
  <v-row>
    <OptionCard
      v-for="vendor in _store_payment_methods"
      :key="vendor.id"
      :title="vendor.name"
      :price="!vendor.remaining_balance ? '' : formattedNumber(vendor.remaining_balance) + ' left'"
      :click="() => selectPaymentMethod(vendor)"
      :isSelected="checkIfSelected(vendor)"
    />
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import OptionCard from '../atoms/OptionCard'

export default {
  name: 'FormPayment',

  components: {
    OptionCard
  },

  computed: {
    ...mapState({
      _store_payment_methods: state => state.extras.payment_methods,
      _store_payment_method: state => state.orders.payment_method
    })
  },

  methods: {
    ...mapMutations(['UPDATE_PAYMENT_VENDOR']),

    selectPaymentMethod(payload) {
      this.UPDATE_PAYMENT_VENDOR(payload)
    },

    checkIfSelected(payload) {
      return payload === this._store_payment_method
    },
    
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
  }
}
</script>