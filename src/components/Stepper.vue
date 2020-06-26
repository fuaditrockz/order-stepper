<template>
  <div class="container">
    <h4>Back to {{ previousPage }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    previousPage: String
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 10px
  background-color white
  min-height 200px
  padding 20px
  -webkit-box-shadow: 3px 6px 17px -3px rgba(249,81,23,0.61)
  box-shadow: 3px 6px 17px -3px rgba(249,81,23,0.61)
</style>