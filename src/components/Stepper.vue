<template>
  <StepperTemplate :child_component="deliveryDetails" isBack="true" />
</template>

<script>
import StepperTemplate from './templates/StepperTemplate'
import DeliveryDetails from './organisms/DeliveryDetails'

export default {
  name: 'StepperTest',
  components: {
    StepperTemplate
  },
  data () {
    return {
      deliveryDetails: DeliveryDetails
    }
  }
}
</script>