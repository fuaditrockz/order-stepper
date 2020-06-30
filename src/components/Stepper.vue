<template>
  <v-container>
    <StepperIndicator />
    <StepperHeader previousPage="cart" :isBack="true" />
    <v-row class="pa-2">
      <RightContainerTemplate :child_component="getPage(stepperPosition)"/>
      <Summary
        :totalGoodsPrice="formattedNumber(GET_TOTAL_PURCHASE)"
        :isDropshipper="isDropshipper"
        :totalFixPrice="formattedNumber(totalPayment())"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import DeliveryDetails from './organisms/DeliveryDetails'
import ShipmentAndPayment from './organisms/ShipmentAndPayment'
import Summary from './organisms/Summary'
import StepperHeader from './molecules/StepperHeader'
import StepperIndicator from './molecules/StepperIndicator'
import RightContainerTemplate from './templates/RightContainerTemplate'

export default {
  name: 'Stepper',
  components: {
    Summary,
    StepperHeader,
    StepperIndicator,
    RightContainerTemplate
  },
  computed: {
    ...mapState({
      stepperPosition: state => state.stepper.stepper_position,
      dropshippingFee: state => state.extras.dropshipping_fee,
      isDropshipper: state => state.orders.delivery_details.dropshipper.is_dropshipper
    }),
    ...mapGetters(['GET_TOTAL_PURCHASE'])
  },
  methods: {
    getPage(position) {
      const stepperPage = [
        DeliveryDetails,
        ShipmentAndPayment
      ]
      console.log(position)
      return stepperPage[position]
    },
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },
    totalPayment() {
      if (this.isDropshipper) {
        return this.GET_TOTAL_PURCHASE + this.dropshippingFee 
      }
      return this.GET_TOTAL_PURCHASE
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 5px
  background-color white
  min-height 300px
  -webkit-box-shadow: 8px 8px 15px 0.1px rgba(255, 138, 0, 0.3)
  box-shadow: 8px 8px 15px 0.1px rgba(255, 138, 0, 0.3)
</style>