<template>
  <v-row>
    <OptionCard
      v-for="vendor in shipmentVendors"
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
      shipmentVendors: state => state.extras.shipments,
      selectedShipmentVendor: state => state.orders.shipment_vendor
    })
  },
  methods: {
    ...mapMutations(['UPDATE_SHIPMENT_VENDOR']),
    selectShipment(payload) {
      this.UPDATE_SHIPMENT_VENDOR(payload)
    },
    checkIfSelected(payload) {
      return payload === this.selectedShipmentVendor
    },
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },
  }
}
</script>