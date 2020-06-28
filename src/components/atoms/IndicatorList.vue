<template>
  <div class="indicator-list-container">
    <div class="number">{{ number }}</div>
    <p class="primary-color">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndicatorList',
  props: {
    number: Number,
    title: String
  }
}
</script>

<style lang="stylus" scoped>
p
  margin-bottom 0
  margin-top 2px
.indicator-list-container
  display flex
  justify-content space-between
  margin 0 10px
  .number
    display inline-block
    width 30px
    height 30px
    text-align center
    vertical-align middle
    line-height 30px
    background-color #FF8A00
    border-radius 50px
    color #fff
    font-weight bold
    margin-right 10px
</style>