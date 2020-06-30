<template>
  <v-row>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="Email"
          class="input-style mb-3"
          :value="email"
          @input="onChangeInput('email', $event.target.value)"
        />
      </div>
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="Phone number"
          class="input-style mb-3"
          :value="phoneNumber"
          @input="onChangeInput('phone_number', $event.target.value)"
        />
      </div>
      <div class="input-wrapper">
        <textarea
          placeholder="Address"
          type="text"
          class="free-text input-style mb-3"
          :value="address"
          @input="onChangeInput('address', $event.target.value)"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="Dropshipper name"
          class="input-style mb-3"
          :value="dropshipperName"
          @input="onChangeInput('dropshipper_name', $event.target.value)"
          :disabled="!isDropshipper"
        />
      </div>
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="Dropshipper phone number"
          class="input-style mb-3"
          :value="dropshipperPhoneNumber"
          @input="onChangeInput('dropshipper_phone_number', $event.target.value)"
          :disabled="!isDropshipper"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FormDeliveryDetails',
  computed: {
    ...mapState({
      isDropshipper: state => state.orders.delivery_details.dropshipper.is_dropshipper,
      email: state => state.orders.delivery_details.email,
      phoneNumber: state => state.orders.delivery_details.phone_number,
      address: state => state.orders.delivery_details.address,
      dropshipperName: state => state.orders.delivery_details.dropshipper.name,
      dropshipperPhoneNumber: state => state.orders.delivery_details.dropshipper.phone_number
    })
  },
  methods: {
    ...mapMutations(['UPDATE_DELIVERY_DETAILS']),
    onChangeInput(id, value) {
      this.UPDATE_DELIVERY_DETAILS({id, value})
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-wrapper
  width 95%
.input-style
  width 100%
  border 1.5px solid #ccc
  padding 15px 15px
.free-text
  height 150px
</style>