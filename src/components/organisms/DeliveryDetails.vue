<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Delivery Details" />
      <div>
        <v-checkbox
          v-model="isDropshipperModel"
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
      isDropshipper: null
    }
  },

  computed: {
    ...mapState({
      _store_dropshipper: state => state.orders.delivery_details.dropshipper,
      _store_delivery_details: state => state.orders.delivery_details,
      _store_stepper_0_valid: state => state.stepper.stepper_0_valid
    }),
    isDropshipperModel: {
      get() {
        return this._store_dropshipper.is_dropshipper
      },
      set(value) {
        const { email, phone_number, address  } = this._store_delivery_details
        const { name, phone_number: dropshipperPhone, is_dropshipper } = this._store_dropshipper
        const { ALLOW_GO_TO_1, DISALLOW_GO_TO_1  } = this
        if (!is_dropshipper) {
          if (name && dropshipperPhone) {
            ALLOW_GO_TO_1()
          } else {
            DISALLOW_GO_TO_1()
          }
        } else {
          if (email && phone_number && address) {
            ALLOW_GO_TO_1()
          } else {
            DISALLOW_GO_TO_1()
          }
        }
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
      } = this

      console.log('VALID FORM', _store_stepper_0_valid)
    }
  }
}
</script>