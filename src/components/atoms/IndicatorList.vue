<template>
  <div class="indicator-list-container">
    <div
      v-bind:class="isActive ? 'number number-active' : 'number number-not-active'"
    >
      {{ number }}
    </div>
    <p class="primary-color">{{ title }}</p>
    <v-icon color="#FF8A00" v-if="isHaveIcon">chevron_right</v-icon>
  </div>
</template>

<script>
export default {
  name: 'IndicatorList',
  props: {
    number: Number,
    title: String,
    isHaveIcon: Boolean,
    isActive: Boolean
  }
}
</script>

<style lang="stylus" scoped>
p
  margin-bottom 0
  margin-top 2px
  margin-right 10px
  font-weight bold
.indicator-list-container
  display flex
  margin 0 10px
.number
  display inline-block
  width 30px
  height 30px
  text-align center
  vertical-align middle
  line-height 30px
  border-radius 50px
  font-weight bold
  margin-right 10px
.number-active
  color #fff
  background-color #FF8A00
.number-not-active
  color #FF8A00
  background-color rgba(255, 138, 0, 0.2)
</style>