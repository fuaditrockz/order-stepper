<template>
  <v-col sm="12" lg="4" class="summary-container">
    <v-col>
      <Title title="Summary" />
      <p>10 items purchased</p>
    </v-col>
    <div class="push-content">

    </div>
    <v-col>
      <div class="spacing-between">
        <p>Cost of goods</p>
        <h4>{{ totalGoodsPrice }}</h4>
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
</template>

<script>
import Title from '../atoms/Title'
import SubmitButton from '../atoms/SubmitButton'

export default {
  name: 'Summary',
  components: {
    Title,
    SubmitButton
  },
  props: {
    totalGoodsPrice: String
  }
}
</script>

<style lang="stylus" scoped>
.summary-container
  border-left 1px solid #FF8A00
  padding 0 0 0 10px
.push-content
  height 200px
</style>