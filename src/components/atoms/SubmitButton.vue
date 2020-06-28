<template>
  <button class="primary-bg-color">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
button
  width 100%
  padding 15px 50px
  color #fff
  font-size 17px
  font-weight bold
  border-radius 2px
  transition 0.3s
  &:hover
    -webkit-box-shadow: 2px 10px 40px 0.3px rgba(59, 59, 59, 0.3)
    box-shadow: 2px 10px 40px 0.3px rgba(59, 59, 59, 0.3)
</style>