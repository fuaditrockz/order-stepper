<template>
  <div>
    <v-row class="spacing-between pr-5">
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
  </div>
</template>

<script>
import Title from '../atoms/Title'
import TextInput from '../atoms/TextInput'

export default {
  name: 'DeliveryDetails',
  components: {
    Title,
    TextInput
  }
}
</script>

<style lang="stylus" scoped>

</style>