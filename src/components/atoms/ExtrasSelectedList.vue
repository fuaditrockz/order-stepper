<template>
  <div class="extras-list-wrapper mb-5">
    <div class="divider mb-5" />
    <h4>{{ title }}</h4>
    <h3>{{ type === 'shipment' ? 'today by ' : '' }} {{ vendor }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ExtrasSelectedList',
  props: {
    title: String,
    vendor: String,
    type: String
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