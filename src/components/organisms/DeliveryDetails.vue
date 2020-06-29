<template>
  <div>
    <v-row class="spacing-between pr-5">
      <Title size="big" title="Delivery Details" />
      <div>
        <CheckBox
          title="Send as dropshipper"
          :isChecked="isDropshipper()"
        />
      </div>
    </v-row>
    <v-row>
      <TextInput placeholder="Email" id="email" />
      <TextInput
        placeholder="Dropshipper name"
        id="drophsipper-name"
        :isDisabled="isDropshipper()"
      />
      <TextInput placeholder="Phone Number" id="phone-number" />
      <TextInput
        placeholder="Dropshipper phone number"
        id="dropshipper-phone-number"
        :isDisabled="isDropshipper()"
      />
      <TextInput
        placeholder="Address"
        id="address"
        textInputType="free-text"
      />
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '../atoms/Title'
import TextInput from '../atoms/TextInput'
import CheckBox from '../atoms/CheckBox'

export default {
  name: 'DeliveryDetails',
  components: {
    Title,
    TextInput,
    CheckBox
  },
  computed: {
    ...mapGetters(['get_is_dropshipper'])
  },
  methods: {
    isDropshipper () {
      const dataResult = this.get_is_dropshipper
      console.log('IS_DROPSHIPPER', dataResult)
      console.log('IS_DROPSHIPPER_INPUT_DISABLED', dataResult)
      return dataResult
    }
  }
}
</script>