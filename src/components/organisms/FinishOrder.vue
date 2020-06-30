<template>
  <div>
    <v-col class="finish-content-wrapper">
      <Title size="big" title="Thank you" lineWidth="50%" class="mb-5" />
      <v-col class="zero-padding">
        <h4>Order ID: XXIB</h4>
        <p class="mb-10">Your order will be delivered today with GO-SEND</p>
        <BackButton content="Go to homepage" :click="goToHomePage" buttonWidth="220px" />
      </v-col>
    </v-col>
  </div>
</template>

<script>
import Title from '../atoms/Title'
import BackButton from '../atoms/BackButton'

export default {
  name: 'FinishOrder',
  components: {
    Title,
    BackButton
  },
  methods: {
    goToHomePage() {
      console.log('Hello World')
    }
  }
}
</script>

<style lang="stylus" scoped>
.finish-content-wrapper
  min-height 400px
  padding 150px
  .title
    width 200px
</style>