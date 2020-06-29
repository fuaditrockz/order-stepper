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
        <!-- <CheckBox
          title="Send as dropshipper"
          :isChecked="get_is_dropshipper()"
          @clicked="setAsDropshipper"
        /> -->
      </div>
    </v-row>
    <v-row>
      <TextInput placeholder="Email" id="email" />
      <TextInput
        placeholder="Dropshipper name"
        id="drophsipper-name"
        :isDisabled="!isDropshipper"
      />
      <TextInput placeholder="Phone Number" id="phone-number" />
      <TextInput
        placeholder="Dropshipper phone number"
        id="dropshipper-phone-number"
        :isDisabled="!isDropshipper"
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
import { mapMutations } from 'vuex'
import Title from '../atoms/Title'
import TextInput from '../atoms/TextInput'
/* import CheckBox from '../atoms/CheckBox' */

export default {
  name: 'DeliveryDetails',
  components: {
    Title,
    TextInput,
    /* CheckBox */
  },
  data() {
    return {
      isDropshipper: true
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