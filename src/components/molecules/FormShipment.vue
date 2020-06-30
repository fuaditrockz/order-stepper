<template>
  <v-row>
    <OptionCard
      v-for="vendor in shipmentVendors"
      :key="vendor.id"
      :title="vendor.name"
      :price="formattedNumber(vendor.price)"
      :click="selectShipment"
    />
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import OptionCard from '../atoms/OptionCard'

export default {
  name: 'FormShipment',
  components: {
    OptionCard
  },
  computed: {
    ...mapState({
      shipmentVendors: state => state.extras.shipments
    })
  },
  methods: {
    selectShipment() {
      console.log(this.shipmentVendors)
    },
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },
  }
}
</script>