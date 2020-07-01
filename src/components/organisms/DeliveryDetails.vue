<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Delivery Details" />
      <div>
        <v-checkbox
          v-model="isDropshipper"
          :value="isDropshipper"
          color="success"
          @change="clickDropshipperCheckBox()"
        >
          <template v-slot:label>
            <h4>Send as dropshipper</h4>
          </template>
        </v-checkbox>
      </div>
    </v-row>
    <FormDeliveryDetails />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Title from '../atoms/Title'
import FormDeliveryDetails from '../molecules/FormDeliveryDetails'

export default {
  name: 'DeliveryDetails',
  components: {
    Title,
    FormDeliveryDetails
  },
  data() {
    return {
      isDropshipper: null,
      emailInput: ''
    }
  },
  computed: {
    ...mapState({
      purchaseItems: state => state.orders.purchase_items,
      isDropshipper: state => state.orders.delivery_details.dropshipper.is_dropshipper,
      dropshippingFee: state => state.extras.dropshipping_fee,
      selectedShipmentVendor: state => state.orders.shipment_vendor,
      selectedPaymentMethod: state => state.orders.payment_method,
      stepperPosition: state => state.stepper.stepper_position,
      deliveryDetails: state => state.orders.delivery_details,
      stepper0Valid: state => state.stepper.stepper_0_valid
    })
  },
  methods: {
    ...mapMutations(['SETUP_DROPSHIPPER']),
    clickDropshipperCheckBox() {
      this.SETUP_DROPSHIPPER(this.isDropshipper)
      console.log(this.isDropshipper)
    }
  }
}
</script>