<template>
  <v-col sm="12" lg="4" class="summary-container mt-5">
    <v-col>
      <Title title="Summary" />
      <p>{{ _store_purchase_items.length }} items purchased</p>
    </v-col>
    <div class="extras-container pl-3">
      <ExtrasSelectedList
        title="Delivery Estimation"
        :vendor="_store_shipment_vendor.name"
        type="shipment"
        v-if="_store_shipment_vendor"
      />
      <ExtrasSelectedList
        title="Payment method"
        :vendor="_store_payment_method.name"
        type="payment-method"
        v-if="_store_payment_method"
      />
    </div>
    <v-col>
      <div class="spacing-between">
        <p>Cost of goods</p>
        <h4>{{ formattingNumber(GET_TOTAL_PURCHASE) }}</h4>
      </div>
      <div class="spacing-between" v-if="_store_dropshipper.is_dropshipper">
        <p>Dropshipping fee</p>
        <h4>{{ formattingNumber(_store_dropshipping_fee) }}</h4>
      </div>
      <div class="spacing-between" v-if="_store_shipment_vendor">
        <p><b>{{ _store_shipment_vendor.name }}</b> shipment</p>
        <h4>{{ formattingNumber(_store_shipment_vendor.price) }}</h4>
      </div>
      <div class="spacing-between mb-5">
        <Title title="Total" />
        <Title :title="formattingNumber(totalPayment())" />
      </div>
      <div class="centerized-content">
        <SubmitButton
          :title="submitButtonWording()"
          :submitFunc="submitDeliveryDetails"
          :isDisabled="isDisabledButton()"
        />
      </div>
    </v-col>
  </v-col>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { formattedNumber } from '../../helpers'
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

  data() {
    return {
      formattingNumber: formattedNumber
    }
  },

  computed: {
    ...mapState({
      _store_purchase_items: state => state.orders.purchase_items,
      _store_dropshipper: state => state.orders.delivery_details.dropshipper,
      _store_dropshipping_fee: state => state.extras.dropshipping_fee,
      _store_shipment_vendor: state => state.orders.shipment_vendor,
      _store_payment_method: state => state.orders.payment_method,
      _store_stepper_position: state => state.stepper.stepper_position,
      _store_delivery_details: state => state.orders.delivery_details,
      _store_stepper_0_valid: state => state.stepper.stepper_0_valid
    }),

    ...mapGetters(['GET_TOTAL_PURCHASE'])
  },

  methods: {
    ...mapMutations(['SUBMIT_DELIVERY_DETAILS']),

    totalPayment() {
      const {
        _store_shipment_vendor,
        _store_dropshipping_fee,
        _store_dropshipper
      } = this

      let amount = 0

      amount += this.GET_TOTAL_PURCHASE
      _store_dropshipper.is_dropshipper ? amount += _store_dropshipping_fee : amount
      _store_shipment_vendor ? amount += _store_shipment_vendor.price : amount
      return amount
    },

    submitDeliveryDetails() {
      this.SUBMIT_DELIVERY_DETAILS()
    },

    submitButtonWording() {
      const { _store_stepper_position, _store_payment_method } = this

      if (_store_stepper_position === 0) {
        return 'Continue to Payment'
      }

      return _store_payment_method ? (
        'Pay with ' + _store_payment_method.name
      ) : (
        'Select payment method'
      )
    },

    isDisabledButton() {
      const { _store_stepper_0_valid } = this

      if (_store_stepper_0_valid) {
        return false
      }
      return true
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