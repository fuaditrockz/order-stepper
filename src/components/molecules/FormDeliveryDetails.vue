<template>
  <v-row>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          id="email"
          type="text"
          placeholder="Email"
          :class="'input-style mb-3 ' + (emailInputError ? 'error-color' : 'regular-color')"
          :value="_store_delivery_details.email"
          @input="onChangeInput($event.target.id, $event.target.value)"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="phone_number"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
          placeholder="Phone number"
          :class="'input-style mb-3 ' + (phoneNumberInputError ? 'error-color' : 'regular-color')"
          :value="_store_delivery_details.phone_number"
          @input="onChangeInput($event.target.id, $event.target.value)"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <textarea
          id="address"
          placeholder="Address"
          type="text"
          :class="'free-text input-style mb-3 ' + (addressInputError ? 'error-color' : 'regular-color')"
          :value="_store_delivery_details.adress"
          @input="onChangeInput($event.target.id, $event.target.value)"
          @blur="validationInput"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <input
          id="dropshipper_name"
          type="text"
          placeholder="Dropshipper name"
          :class="'input-style mb-3 ' + (dropshipperNameInputError ? 'error-color' : 'regular-color')"
          :value="_store_dropshipper.name"
          @input="onChangeInput($event.target.id, $event.target.value)"
          :disabled="!_store_dropshipper.is_dropshipper"
          @blur="validationInput"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="dropshipper_phone_number"
          type="text"
          placeholder="Dropshipper phone number"
          :class="'input-style mb-3 ' + (dropshipperPhoneNumberInputError ? 'error-color' : 'regular-color')"
          :value="_store_dropshipper.phone_number"
          @input="onChangeInput($event.target.id, $event.target.value)"
          :disabled="!_store_dropshipper.is_dropshipper"
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
      _store_delivery_details: state => state.orders.delivery_details,
      _store_dropshipper: state => state.orders.delivery_details.dropshipper
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
      const { allowSubmitToPayment } = this
      const { id, value } = e.target

      switch (id) {
        case 'email':
          var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if(value.length === 0 || emailRegex.test(value) === false) {
            this.emailInputError = true
          } else {
            this.emailInputError = false
          }
          break;
        case 'phone-number':
          if(value.length === 0 || phone(value).length === 0) {
            console.log(phone(value))
            this.phoneNumberInputError = true
          } else {
            console.log(phone(value))
            this.phoneNumberInputError = false
          }
          break;
        case 'address':
          if(value.length === 0) {
            this.addressInputError = true
          } else {
            this.addressInputError = false
          }
          break;
        case 'dropshipper-name':
          if(value.length === 0) {
            this.dropshipperNameInputError = true
          } else {
            this.dropshipperNameInputError = false
          }
          break;
        case 'dropshipper-phone-number':
          if(value.length === 0) {
            this.dropshipperPhoneNumberInputError = true
          } else {
            this.dropshipperPhoneNumberInputError = false
          }
          break;
        default:
          break;
      }

      allowSubmitToPayment()
    },

    allowSubmitToPayment() {
      const {
        emailInputError,
        phoneNumberInputError,
        addressInputError,
        dropshipperNameInputError,
        dropshipperPhoneNumberInputError,
        _store_dropshipper,
        ALLOW_GO_TO_1,
        DISALLOW_GO_TO_1
      } = this
      const { is_dropshipper } = _store_dropshipper

      if (is_dropshipper) {
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