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
import { mapMutations } from 'vuex'
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
  methods: {
    ...mapMutations(['SETUP_DROPSHIPPER']),
    clickDropshipperCheckBox() {
      this.SETUP_DROPSHIPPER(this.isDropshipper)
      console.log(this.isDropshipper)
    }
  }
}
</script>