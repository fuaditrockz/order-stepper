<template>
  <v-container>
    <v-row class="header">
      <BackButton content="cart"/>
    </v-row>
    <v-row class="content">
      <v-col sm="12" lg="8" class="content-container">
        <v-row class="content-header spacing-between">
          <Title size="big" title="Delivery Details" />
          <div>
            <v-checkbox :label="`Send as dropshipper`" />
          </div>
        </v-row>
        <v-row>
          <TextInput placeholder="Email" id="email" />
          <TextInput placeholder="Dropshipper name" id="drophsipper-name" />
          <TextInput placeholder="Phone Number" id="phone-number" />
          <TextInput placeholder="Dropshipper phone number" id="dropshipper-phone-number" />
          <TextInput
            placeholder="Address"
            id="address"
            textInputType="free-text"
          />
        </v-row>
      </v-col>
      <v-col sm="12" lg="4" class="summary-container zero-padding">
        <v-col>
          <Title title="Summary" />
          <p>10 items purchased</p>
        </v-col>
        <div class="push-content">

        </div>
        <v-col>
          <div class="spacing-between">
            <p>Cost of goods</p>
            <h4>500,000</h4>
          </div>
          <div class="spacing-between">
            <p>Dropshipping fee</p>
            <h4>5,900</h4>
          </div>
          <div class="spacing-between mb-5">
            <Title title="Total" />
            <Title title="505,900" />
          </div>
          <div class="centerized-content">
            <SubmitButton title="Continue to Payment" />
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Title from './sub-components/Title'
import BackButton from './sub-components/BackButton'
import TextInput from './sub-components/TextInput'
import SubmitButton from './sub-components/SubmitButton'

export default {
  name: 'Stepper',
  components: {
    Title,
    BackButton,
    TextInput,
    SubmitButton
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 5px
  background-color white
  min-height 200px
  -webkit-box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
  box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
.header
  padding 30px 40px 0px
.content
  padding 10px 40px 0px
.content-container
  .content-header
    padding-right 60px
.summary-container
  border-left 1px solid #FF8A00
.push-content
  height 200px
</style>