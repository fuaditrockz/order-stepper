<template>
  <v-col cols="6" lg="3" class="shipment-item-wrapper zero-padding">
    <a href="#" @click="onSelectThis()">
      <div
        :class="isSelected ? 'shipment-item shipment-item-selected' : 'shipment-item shipment-item-not-selected'"
      >
        <h4>{{ title }}</h4>
        <h4>{{ price }}</h4>
      </div>
    </a>
  </v-col>
</template>

<script>
export default {
  name: 'OptionCard',
  props: {
    title: String,
    price: String,
    isSelected: Boolean,
    click: Function
  },
  methods: {
    onSelectThis() {
      this.click()
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.shipment-item-wrapper
  height 75px
  padding 5px
  .shipment-item
    width 100%
    height 100%
    border-width 1.5px
    border-style solid
    border-radius 3px
    padding 5px 15px
    transition 0.3s
  .shipment-item-not-selected
    border-color #ccc
    h4
      color #828282
      font-weight 600
      transition 0.3s
    &:hover > h4
      color #2ed573
    &:hover
      border-color #2ed573
  .shipment-item-selected
    border-color #2ed573
    h4
     color #2ed573 
</style>