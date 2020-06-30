<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Shipment" />
    </v-row>
    <FormShipment />
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Payment" />
    </v-row>
    <!-- <FormDeliveryDetails /> -->
  </div>
</template>

<script>
import Title from '../atoms/Title'
import FormShipment from '../molecules/FormShipment'

export default {
  name: 'ShipmentAndPayment',
  components: {
    Title,
    FormShipment
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

</style>