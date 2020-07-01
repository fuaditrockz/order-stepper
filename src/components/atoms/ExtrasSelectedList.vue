<template>
  <div class="extras-list-wrapper mb-5">
    <div class="divider mb-5" />
    <h4>{{ title }}</h4>
    <h3>{{ type === 'shipment' ? `${timeFormat(estimation)} by ` : '' }} {{ vendor }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ExtrasSelectedList',
  props: {
    title: String,
    vendor: String,
    estimation: Number,
    type: String
  },
  methods: {
    timeFormat(est) {
      if (est > 1) {
        return `${est} days`
      }
      return est < 1 ? 'today' : 'tomorrow'
    }
  }
}
</script>

<style lang="stylus" scooped>
h3
  color #2ed573
.extras-list-wrapper
  width 100%
.divider
  border-top 1.5px solid #ccc
  width 100px
</style>