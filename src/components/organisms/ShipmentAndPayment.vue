<template>
  <div>
    <v-row class="spacing-between pr-5 mb-3">
      <Title size="big" title="Shipment" />
    </v-row>
    <FormShipment class="mb-10" />
    <v-row class="spacing-between pr-5 mb-3">
      <Title size="big" title="Payment" />
    </v-row>
    <FormPayment class="mb-10" />
  </div>
</template>

<script>
import Title from '../atoms/Title'
import FormShipment from '../molecules/FormShipment'
import FormPayment from '../molecules/FormPayment'

export default {
  name: 'ShipmentAndPayment',
  components: {
    Title,
    FormShipment,
    FormPayment
  }
}
</script>

<style lang="stylus" scoped>

</style>