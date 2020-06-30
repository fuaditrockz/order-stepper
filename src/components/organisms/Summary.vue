<template>
  <v-col sm="12" lg="4" class="summary-container">
    <v-col>
      <Title title="Summary" />
      <p>10 items purchased</p>
    </v-col>
    <div class="extras-container pl-3">
      <ExtrasSelectedList
        title="Delivery Estimation"
        :vendor="selectedShipmentVendor.name"
        type="shipment"
        v-if="selectedShipmentVendor"
      />
      <ExtrasSelectedList
        title="Payment method"
        :vendor="selectedPaymentMethod.name"
        type="payment-method"
        v-if="selectedPaymentMethod"
      />
    </div>
    <v-col>
      <div class="spacing-between">
        <p>Cost of goods</p>
        <h4>{{ formattedNumber(GET_TOTAL_PURCHASE) }}</h4>
      </div>
      <div class="spacing-between" v-if="isDropshipper">
        <p>Dropshipping fee</p>
        <h4>{{ formattedNumber(dropshippingFee) }}</h4>
      </div>
      <div class="spacing-between" v-if="selectedShipmentVendor">
        <p><b>{{ selectedShipmentVendor.name }}</b> shipment</p>
        <h4>{{ formattedNumber(selectedShipmentVendor.price) }}</h4>
      </div>
      <div class="spacing-between mb-5">
        <Title title="Total" />
        <Title :title="formattedNumber(totalPayment())" />
      </div>
      <div class="centerized-content">
        <SubmitButton
          title="Continue to Payment"
          :submitFunc="submitDeliveryDetails"
        />
      </div>
    </v-col>
  </v-col>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Title from '../atoms/Title'
import SubmitButton from '../atoms/SubmitButton'
import ExtrasSelectedList from '../atoms/ExtrasSelectedList'

export default {
  name: 'Summary',
  components: {
    Title,
    SubmitButton,
    ExtrasSelectedList
  },
  computed: {
    ...mapState({
      isDropshipper: state => state.orders.delivery_details.dropshipper.is_dropshipper,
      dropshippingFee: state => state.extras.dropshipping_fee,
      selectedShipmentVendor: state => state.orders.shipment_vendor,
      selectedPaymentMethod: state => state.orders.payment_method
    }),
    ...mapGetters(['GET_TOTAL_PURCHASE'])
  },
  methods: {
    ...mapMutations(['SUBMIT_DELIVERY_DETAILS']),
    formattedNumber(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },
    totalPayment() {
      let amount = 0
      amount += this.GET_TOTAL_PURCHASE
      this.isDropshipper ? amount += this.dropshippingFee : amount
      this.selectedShipmentVendor ? amount += this.selectedShipmentVendor.price : amount
      return amount
    },
    submitDeliveryDetails() {
      this.SUBMIT_DELIVERY_DETAILS()
    }
  }
}
</script>

<style lang="stylus" scoped>
.summary-container
  border-left 1px solid #FF8A00
  padding 0 0 0 10px
.extras-container
  height 200px
</style>