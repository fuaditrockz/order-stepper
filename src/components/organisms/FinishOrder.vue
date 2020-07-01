<template>
  <div>
    <v-col class="finish-content-wrapper">
      <Title size="big" title="Thank you" lineWidth="50%" class="mb-5" />
      <v-col class="zero-padding">
        <h4>Order ID: {{ _store_order_id }}</h4>
        <p class="mb-10">Your order will be delivered {{ getEstimation() }} with {{ _store_shipment_vendor.name }}</p>
        <BackButton content="Go to homepage" :click="goToHomePage" buttonWidth="220px" />
      </v-col>
    </v-col>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Title from '../atoms/Title'
import BackButton from '../atoms/BackButton'

export default {
  name: 'FinishOrder',
  components: {
    Title,
    BackButton
  },
  computed: {
    ...mapState({
      _store_order_id: state => state.orders.order_id,
      _store_shipment_vendor: state => state.orders.shipment_vendor,
    })
  },
  methods: {
    goToHomePage() {
      console.log('Hello World')
    },
    getEstimation() {
      const { estimation } = this._store_shipment_vendor
      if (estimation > 1) {
        return `${estimation} days`
      }
      return estimation < 1 ? 'today' : 'tomorrow'
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