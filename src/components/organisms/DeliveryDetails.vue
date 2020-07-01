<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Delivery Details" />
      <div>
        <v-checkbox
          v-model="isDropshipperTest"
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
      _store_dropshipper: state => state.orders.delivery_details.dropshipper,
      _store_delivery_details: state => state.orders.delivery_details,
      _store_stepper_0_valid: state => state.stepper.stepper_0_valid
    }),
    isDropshipperTest: {
      get() {
        return this._store_dropshipper.is_dropshipper
      },
      set(value) {
        this.SETUP_DROPSHIPPER(value)
      }
    }
  },

  methods: {
    ...mapMutations([
      'SETUP_DROPSHIPPER',
      'DISALLOW_GO_TO_1',
      'ALLOW_GO_TO_1'
    ]),
    clickDropshipperCheckBox() {
      const {
        _store_stepper_0_valid,
        _store_delivery_details,
        _store_dropshipper,
        DISALLOW_GO_TO_1,
        ALLOW_GO_TO_1,
      } = this
      const { name, phone_number  } = _store_delivery_details
      const { is_dropshipper } = _store_dropshipper

      loggers.dropshipperStatus(is_dropshipper)

      if (is_dropshipper) {
        DISALLOW_GO_TO_1()
        if (name && phone_number) {
          ALLOW_GO_TO_1()
        } else {
          DISALLOW_GO_TO_1()
        }
      } else {
        DISALLOW_GO_TO_1()
        if (_store_stepper_0_valid) {
          ALLOW_GO_TO_1() 
        } else {
          DISALLOW_GO_TO_1()
        }
      }

      console.log('VALID FORM', _store_stepper_0_valid)
    }
  }
}
</script>