<template>
  <button
    :class="isDisabled ? 'disabled-color' : 'button-effect primary-bg-color'"
    @click="submit"
    :disabled="isDisabled"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    title: String,
    isDisabled: Boolean,
    submitFunc: Function
  },
  methods: {
    submit() {
      this.submitFunc()
    }
  }
}
</script>

<style lang="stylus" scoped>
.button-effect
  transition 0.3s
  &:hover
    -webkit-box-shadow: 2px 10px 40px 0.3px rgba(59, 59, 59, 0.3)
    box-shadow: 2px 10px 40px 0.3px rgba(59, 59, 59, 0.3)
button
  width 100%
  padding 15px 50px
  color #fff
  font-size 17px
  font-weight bold
  border-radius 2px
</style>