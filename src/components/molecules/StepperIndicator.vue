<template>
  <div class="stepper-indicator-container">
    <div class="indicator-wrapper">
      <ul>
        <li>
          <IndicatorList
            :number="1"
            title="Delivery"
            :isHaveIcon="true"
            :isActive="true"
          />
        </li>
        <li>
          <IndicatorList
            :number="2"
            title="Payment"
            :isHaveIcon="true"
            :isActive="_store_stepper_position === 1 || _store_stepper_position === 2"
          />
        </li>
        <li>
          <IndicatorList
            :number="3"
            title="Finish"
            :isActive="_store_stepper_position === 2"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IndicatorList from '../atoms/IndicatorList'

export default {
  name: 'StepperIndicator',
  
  components: {
    IndicatorList
  },

  computed: {
    ...mapState({
      _store_stepper_position: state => state.stepper.stepper_position
    }),
  }
}
</script>

<style lang="stylus" scoped>
.stepper-indicator-container
  height 70px
  width 100%
  position absolute
  top 16px
  left 0
  .indicator-wrapper
    background-color #FFFAE6
    border-radius 50px
    width 40%
    height 100%
    margin 0 auto
    padding 10px
    @media screen and (min-width: 768px)
      margin 0 25%
      width 50%
    @media screen and (max-width: 600px)
      margin 0
      width 100%
    ul
      position relative
      top 25%
      padding 0
      width 100%
      list-style none
      text-align center
      li
        display inline-block
</style>