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
.v-icon
  @media screen and (max-width: 600px)
    font-size 16px
  @media screen and (max-width: 400px)
    font-size 10px
p
  margin-bottom 0
  margin-top 2px
  margin-right 10px
  font-weight bold
  @media screen and (max-width: 600px)
    font-size 12px
    margin-top 5px
    margin-right 5px
  @media screen and (max-width: 400px)
    font-size 10px
    margin-top 7px
    margin-right 3px
.indicator-list-container
  display flex
  margin 0 10px
  @media screen and (max-width: 600px)
    margin 0 5px
  @media screen and (max-width: 400px)
    margin 0 2px
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
  @media screen and (max-width: 600px)
    font-size 12px
  @media screen and (max-width: 400px)
    font-size 10px
.number-active
  color #fff
  background-color #FF8A00
.number-not-active
  color #FF8A00
  background-color rgba(255, 138, 0, 0.2)
</style>