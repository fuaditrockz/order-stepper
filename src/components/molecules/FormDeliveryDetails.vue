<template>
  <v-row>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          id="email"
          type="text"
          placeholder="Email"
          :class="'input-style mb-3 ' + (emailInputError ? 'error-color' : 'regular-color')"
          :value="email"
          @input="onChangeInput('email', $event.target.value)"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="phone-number"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
          placeholder="Phone number"
          :class="'input-style mb-3 ' + (phoneNumberInputError ? 'error-color' : 'regular-color')"
          :value="phoneNumber"
          @input="onChangeInput('phone_number', $event.target.value)"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <textarea
          id="address"
          placeholder="Address"
          type="text"
          :class="'free-text input-style mb-3 ' + (addressInputError ? 'error-color' : 'regular-color')"
          :value="address"
          @input="onChangeInput('address', $event.target.value)"
          @blur="validationInput"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          id="dropshipper-name"
          type="text"
          placeholder="Dropshipper name"
          :class="'input-style mb-3 ' + (dropshipperNameInputError ? 'error-color' : 'regular-color')"
          :value="dropshipperName"
          @input="onChangeInput('dropshipper_name', $event.target.value)"
          :disabled="!isDropshipper"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="dropshipper-phone-number"
          type="text"
          placeholder="Dropshipper phone number"
          :class="'input-style mb-3 ' + (dropshipperPhoneNumberInputError ? 'error-color' : 'regular-color')"
          :value="dropshipperPhoneNumber"
          @input="onChangeInput('dropshipper_phone_number', $event.target.value)"
          :disabled="!isDropshipper"
          @blur="validationInput"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import phone from 'phone'

export default {
  name: 'FormDeliveryDetails',
  data() {
    return {
      emailInputError: false,
      phoneNumberInputError: false,
      dropshipperNameInputError: false,
      dropshipperPhoneNumberInputError: false,
      addressInputError: false
    }
  },
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
    ...mapMutations([
      'UPDATE_DELIVERY_DETAILS',
      'ALLOW_GO_TO_1',
      'DISALLOW_GO_TO_1',
    ]),
    onChangeInput(id, value) {
      this.UPDATE_DELIVERY_DETAILS({id, value})
    },
    validationInput(e) {
      switch (e.target.id) {
        case 'email':
          var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if(e.target.value.length === 0 || emailRegex.test(e.target.value) === false) {
            this.emailInputError = true
          } else {
            this.emailInputError = false
          }
          break;
        case 'phone-number':
          if(e.target.value.length === 0 || phone(e.target.value).length === 0) {
            console.log(phone(e.target.value))
            this.phoneNumberInputError = true
          } else {
            console.log(phone(e.target.value))
            this.phoneNumberInputError = false
          }
          break;
        case 'address':
          if(e.target.value.length === 0) {
            this.addressInputError = true
          } else {
            this.addressInputError = false
          }
          break;
        case 'dropshipper-name':
          if(e.target.value.length === 0) {
            this.dropshipperNameInputError = true
          } else {
            this.dropshipperNameInputError = false
          }
          break;
        case 'dropshipper-phone-number':
          if(e.target.value.length === 0) {
            this.dropshipperPhoneNumberInputError = true
          } else {
            this.dropshipperPhoneNumberInputError = false
          }
          break;
        default:
          break;
      }
      this.allowSubmitToPayment()
    },
    allowSubmitToPayment() {
      const {
        emailInputError,
        phoneNumberInputError,
        addressInputError,
        dropshipperNameInputError,
        dropshipperPhoneNumberInputError,
        isDropshipper,
        ALLOW_GO_TO_1,
        DISALLOW_GO_TO_1
      } = this
      if (isDropshipper) {
        !emailInputError && !phoneNumberInputError && !addressInputError && !dropshipperNameInputError && !dropshipperPhoneNumberInputError ? (
          ALLOW_GO_TO_1()
        ) : (
          DISALLOW_GO_TO_1()
        )
      } else {
        if (!emailInputError && !phoneNumberInputError && !addressInputError) {
          ALLOW_GO_TO_1()
        } else {
          DISALLOW_GO_TO_1()
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-wrapper
  width 95%
.input-style
  width 100%
  padding 15px 15px
input:focus
  outline none !important
  border-color #ccc
.regular-color
  border 1.5px solid #ccc
.error-color
  border 1.5px solid #ffa502
  color #ffa502
.free-text
  height 150px
</style>