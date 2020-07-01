<template>
  <div>
    <v-col class="finish-content-wrapper">
      <Title size="big" title="Thank you" lineWidth="50%" class="mb-5" />
      <v-col class="zero-padding">
        <h4>Order ID: {{ _store_order_id }}</h4>
        <p class="mb-10">Your order will be delivered {{ getEstimation() }} with {{ _store_shipment_vendor.name }}</p>
        <a
          href="#"
          @click="goToHomePage()"
          style="width: 160px;"
        >
          <v-icon color="#535c68" size="20px">arrow_back</v-icon>
          <h4>Go to homepage</h4>
        </a>
      </v-col>
    </v-col>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Title from '../atoms/Title'

export default {
  name: 'FinishOrder',
  components: { Title },
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
a
  float left
  display inline-flex
  justify-content space-between 
  text-decoration none
  padding 5px 12px 5px 5px
  border-radius 5px
  transition: 0.3s;
  &:hover
    background-color rgba(255, 138, 0, 0.2)
  h4
    color #535c68
.finish-content-wrapper
  min-height 400px
  padding 150px
  .title
    width 200px
</style>