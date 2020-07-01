<template>
  <v-row>
    <OptionCard
      v-for="vendor in _store_shipments"
      :key="vendor.id"
      :title="vendor.name"
      :price="formattedNumber(vendor.price)"
      :click="() => selectShipment(vendor)"
      :isSelected="checkIfSelected(vendor)"
    />
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import OptionCard from '../atoms/OptionCard'

export default {
  name: 'FormShipment',
  components: {
    OptionCard
  },

  computed: {
    ...mapState({
      _store_shipments: state => state.extras.shipments,
      _store_shipment_vendor: state => state.orders.shipment_vendor
    })
  },

  methods: {
    ...mapMutations(['UPDATE_SHIPMENT_VENDOR']),

    selectShipment(payload) {
      this.UPDATE_SHIPMENT_VENDOR(payload)
    },

    checkIfSelected(payload) {
      return payload === this._store_shipment_vendor
    },
    
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },
  }
}
</script>