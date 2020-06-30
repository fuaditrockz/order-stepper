<template>
  <v-container>
    <StepperIndicator />
    <StepperHeader
      :previousPage="stepperPosition === 0 ? 'cart' : 'delivery'"
      :isBack="stepperPosition < 2"
    />
    <v-row class="pa-2">
      <RightContainerTemplate :child_component="getPage(stepperPosition)"/>
      <Summary />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
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
      stepperPosition: state => state.stepper.stepper_position
    })
  },
  methods: {
    getPage(position) {
      const stepperPage = [
        DeliveryDetails,
        ShipmentAndPayment
      ]
      console.log('PAGE_POSITION ', position)
      return stepperPage[position]
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