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
      deliveryDetails: state => state.orders.delivery_details,
      stepper0Valid: state => state.stepper.stepper_0_valid
    })
  },
  methods: {
    ...mapMutations([
      'SETUP_DROPSHIPPER',
      'DISALLOW_GO_TO_1',
      'ALLOW_GO_TO_1',
    ]),
    clickDropshipperCheckBox() {
      const {
        dropshipper
      } = this.deliveryDetails
      if (!dropshipper.is_dropshipper && (!dropshipper.name || !dropshipper.phone_number)) {
        this.SETUP_DROPSHIPPER(this.isDropshipper)
        this.DISALLOW_GO_TO_1()
      } else {
        this.SETUP_DROPSHIPPER(this.isDropshipper)
        this.ALLOW_GO_TO_1()
      }
      console.log(this.isDropshipper)
    }
  }
}
</script>