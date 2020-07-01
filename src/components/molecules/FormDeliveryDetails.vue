<template>
  <v-row>
    <v-col cols="12" lg="6" class="zero-padding">
      <div class="input-wrapper">
        <ValidationProvider
          rules="email|required"
          v-slot="{ errors }"
        >
           <input
            id="email"
            type="text"
            placeholder="Email"
            :class="'input-style mb-3 ' + (errors[0] ? 'error-color' : 'regular-color')"
            v-model="emailInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
          />
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="phone_number|required"
          v-slot="{ errors }"
        >
          <input
            id="phone_number"
            type="tel"
            placeholder="Phone number"
            :class="'input-style mb-3 ' + (errors[0] ? 'error-color' : 'regular-color')"
            v-model="phoneNumberInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
          />
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="address|required"
          v-slot="{ errors }"
        >
          <textarea
            id="address"
            placeholder="Address"
            type="text"
            :class="'free-text input-style mb-3 ' + (errors[0] ? 'error-color' : 'regular-color')"
            v-model="addressInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
          />
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
            id="dropshipper_name"
            type="text"
            placeholder="Dropshipper name"
            :class="'input-style mb-3 ' + (errors[0] && _store_dropshipper.is_dropshipper ? 'error-color' : 'regular-color')"
            v-model="dropshipperNameInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            :disabled="!_store_dropshipper.is_dropshipper"
          />
          {{ test(errors[0]) }}
        </ValidationProvider>
      </div>
      <div class="input-wrapper">
        <ValidationProvider
          rules="phone_number|required"
          v-slot="{ errors }"
        >
          <input
            id="dropshipper_phone_number"
            type="tel"
            placeholder="Dropshipper phone number"
            :class="'input-style mb-3 ' + (errors[0] && _store_dropshipper.is_dropshipper ? 'error-color' : 'regular-color')"
            v-model="dropshipperPhoneNumberInput"
            @input="onChangeInput($event.target.id, $event.target.value)"
            :disabled="!_store_dropshipper.is_dropshipper"
          />
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