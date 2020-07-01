<template>
  <v-row>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <ValidationProvider
          rules="email|required"
          v-slot="{ errors }"
        >
          <input
            required
            ref="email"
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            :class="
              'mb-3 ' + (errors[0] ? (
                'error-border-color'
              ) :
                _store_delivery_details.email ? (
                  'success-border-color'
                ) : (
                  'regular-border-color'
                )
              )
            "
            v-model="emailInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            @focus="isEmailIconAppear = true"
          />
          <label for="email" :class="'input-label ' + (errors[0] && 'error-color')">Email</label>
          <div class="input-icon" v-show="isEmailIconAppear">
            <v-icon :color="errors[0] ? '#ffa502' : '#2ed573'" size="20px">{{ errors[0] ? 'close' : 'check' }}</v-icon>
          </div>
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="phone_number|required"
          v-slot="{ errors }"
        >
          <input
            required
            name="phone_number"
            id="phone_number"
            type="tel"
            placeholder="Phone number"
            :class="
              'mb-3 ' + (errors[0] ? (
                'error-border-color'
              ) :
                _store_delivery_details.phone_number ? (
                  'success-border-color'
                ) : (
                  'regular-border-color'
                )
              )
            "
            v-model="phoneNumberInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            @focus="isPhoneNumberIconAppear = true"
          />
          <label for="phone_number" :class="'input-label ' + (errors[0] && 'error-color')">Phone number</label>
          <div class="input-icon" v-show="isPhoneNumberIconAppear">
            <v-icon :color="errors[0] ? '#ffa502' : '#2ed573'" size="20px">{{ errors[0] ? 'close' : 'check' }}</v-icon>
          </div>
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="address|required"
          v-slot="{ errors }"
        >
          <textarea
            required
            name="address"
            id="address"
            placeholder="Delivery address"
            type="text"
            :class="
              'mb-3 ' + (errors[0] ? (
                'error-border-color'
              ) :
                _store_delivery_details.address ? (
                  'success-border-color'
                ) : (
                  'regular-border-color'
                )
              )
            "
            v-model="addressInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            @focus="isAddressIconAppear = true"
          />
          <label for="address" :class="'textarea-label ' + (errors[0] && 'error-color')">Address</label>
          <div class="input-icon" v-show="isAddressIconAppear">
            <v-icon :color="errors[0] ? '#ffa502' : '#2ed573'" size="20px">{{ errors[0] ? 'close' : 'check' }}</v-icon>
          </div>
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
        >
          <input
            required
            ref="dropshipper_name"
            name="dropshipper_name"
            id="dropshipper_name"
            type="text"
            placeholder="Dropshipper name"
            :class="
              'input-style mb-3 ' + (errors[0] && _store_dropshipper.is_dropshipper ? (
                'error-border-color'
              ) :
                _store_dropshipper.name && _store_dropshipper.is_dropshipper ? (
                  'success-border-color'
                ) : (
                  'regular-border-color'
                )
              )
            "
            v-model="dropshipperNameInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            :disabled="!_store_dropshipper.is_dropshipper"
            @focus="isDropshipperNameIconAppear = true"
          />
          <label for="dropshipper_name" :class="'input-label ' + (errors[0] && 'error-color')">Dropshipper name</label>
          <div class="input-icon" v-show="isDropshipperNameIconAppear & _store_dropshipper.is_dropshipper">
            <v-icon :color="errors[0] ? '#ffa502' : '#2ed573'" size="20px">{{ errors[0] ? 'close' : 'check' }}</v-icon>
          </div>
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="phone_number|required"
          v-slot="{ errors }"
        >
          <input
            required
            ref="dropshipper_phone_number"
            name="dropshipper_phone_number"
            id="dropshipper_phone_number"
            type="tel"
            placeholder="Dropshipper phone number"
            :class="
              'input-style mb-3 ' + (errors[0] && _store_dropshipper.is_dropshipper ? (
                'error-border-color'
              ) :
                _store_dropshipper.phone_number && _store_dropshipper.is_dropshipper ? (
                  'success-border-color'
                ) : (
                  'regular-border-color'
                )
              )
            "
            v-model="dropshipperPhoneNumberInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            :disabled="!_store_dropshipper.is_dropshipper"
            @focus="isDropshipperPhoneNumberIconAppear = true"
          />
          <label for="dropshipper_phone_number" :class="'input-label ' + (errors[0] && 'error-color')">Dropshipper name</label>
          <div class="input-icon" v-show="isDropshipperPhoneNumberIconAppear & _store_dropshipper.is_dropshipper">
            <v-icon :color="errors[0] ? '#ffa502' : '#2ed573'" size="20px">{{ errors[0] ? 'close' : 'check' }}</v-icon>
          </div>
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ValidationProvider  } from 'vee-validate'
import { formRules } from '../../helpers'

formRules()

export default {
  name: 'FormDeliveryDetails',

  components: {
    ValidationProvider
  },
  
  data() {
    return {
      isEmailIconAppear: false,
      isPhoneNumberIconAppear: false,
      isAddressIconAppear: false,
      isDropshipperNameIconAppear: false,
      isDropshipperPhoneNumberIconAppear: false
    }
  },

  computed: {
    ...mapState({
      _store_delivery_details: state => state.orders.delivery_details,
      _store_dropshipper: state => state.orders.delivery_details.dropshipper
    }),

    emailInput: {
      get() {
        return this._store_delivery_details.email
      },
      set() {}
    },
    phoneNumberInput: {
      get() {
        return this._store_delivery_details.phone_number
      },
      set() {}
    },
    addressInput: {
      get() {
        return this._store_delivery_details.address
      },
      set() {}
    },
    dropshipperNameInput: {
      get() {
        return this._store_dropshipper.name
      },
      set() {}
    },
    dropshipperPhoneNumberInput: {
      get() {
        return this._store_dropshipper.phone_number
      },
      set() {}
    }
  },

  methods: {
    ...mapMutations([
      'UPDATE_DELIVERY_DETAILS',
      'ALLOW_GO_TO_1',
      'DISALLOW_GO_TO_1',
    ]),

    test(i) {
      console.log(i)
      if (i) {
        this.DISALLOW_GO_TO_1()
      }
    },

    onChangeInput(id, value) {      
      this.UPDATE_DELIVERY_DETAILS({id, value})
      const { email, phone_number, address  } = this._store_delivery_details
      const { name, phone_number: dropshipperPhone, is_dropshipper } = this._store_dropshipper
      if (email && phone_number && address) {
        if (is_dropshipper) {
          if (name && dropshipperPhone) {
            this.ALLOW_GO_TO_1()
          } else {
            this.DISALLOW_GO_TO_1()
          }
        } else {
          if (email && phone_number && address) {
            this.ALLOW_GO_TO_1()
          } else {
            this.DISALLOW_GO_TO_1()
          }
        }
      } else {
        this.DISALLOW_GO_TO_1()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-wrapper 
  width 95%
  textarea
    height 150px
  .textarea-label
    top -161px
    left 16px
  .input-label
    top -61px
    left 16px
  .input-icon
    height 0
    .v-icon
      position relative
      top -54px
      left 90%
  label
    height 0
    position relative
    font-size 14px
    display block
    visibility hidden
    opacity 0
    color #2ed573
    transition visibility 0s, opacity 0.5s linear
  input, textarea
    padding 15px 15px
    width 100%
    outline none !important
    border-color #ccc
  input
    &:focus, &:valid
      padding 22px 15px 8px
    &:focus + label, &:valid + label
      visibility visible
      opacity 1
  textarea
    &:focus, &:valid
      padding 22px 15px 8px
    &:focus + label, &:valid + label
      visibility visible
      opacity 1
.regular-border-color
  border 1.5px solid #ccc !important
.error-border-color
  border 1.5px solid #ffa502 !important
.success-border-color
  border 1.5px solid #2ed573 !important
.error-color
  color #ffa502 !important
</style>