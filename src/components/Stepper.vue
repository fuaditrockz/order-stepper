<template>
  <v-container>
    <StepperIndicator />
    <StepperHeader previousPage="cart" isBack="true" />
    <v-row class="pa-2">
      <RightContainerTemplate :child_component="deliveryDetails"/>
      <Summary />
    </v-row>
  </v-container>
</template>

<script>
import DeliveryDetails from './organisms/DeliveryDetails'
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
  data () {
    return {
      deliveryDetails: DeliveryDetails
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