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
import { loggers } from '../../helpers'

export default {
  name: 'DeliveryDetails',

  components: {
    Title,
    FormDeliveryDetails
  },

  data() {
    return {
      isDropshipper: null
    }
  },

  computed: {
    ...mapState({
      _store_delivery_details: state => state.orders.delivery_details,
      _store_stepper_0_valid: state => state.stepper.stepper_0_valid
    })
  },

  methods: {
    ...mapMutations([
      'SETUP_DROPSHIPPER',
      'DISALLOW_GO_TO_1',
      'ALLOW_GO_TO_1'
    ]),
    clickDropshipperCheckBox() {
      const {
        isDropshipper,
        _store_delivery_details,
        DISALLOW_GO_TO_1,
        ALLOW_GO_TO_1, SETUP_DROPSHIPPER
      } = this
      const { is_dropshipper, name, phone_number  } = _store_delivery_details.dropshipper

      if (!is_dropshipper && (!name || !phone_number)) {
        SETUP_DROPSHIPPER(isDropshipper)
        DISALLOW_GO_TO_1()
      } else {
        SETUP_DROPSHIPPER(isDropshipper)
        ALLOW_GO_TO_1()
      }

      loggers.dropshipperStatus(isDropshipper)
    }
  }
}
</script>