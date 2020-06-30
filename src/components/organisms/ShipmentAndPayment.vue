<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Shipment" />
    </v-row>
    <!-- <FormDeliveryDetails /> -->
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Payment" />
    </v-row>
    <!-- <FormDeliveryDetails /> -->
  </div>
</template>

<script>
import Title from '../atoms/Title'

export default {
  name: 'ShipmentAndPayment',
  components: {
    Title
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

</style>