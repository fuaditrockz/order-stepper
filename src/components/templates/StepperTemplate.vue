<template>
  <v-container>
    <v-row class="header" v-if="isBack">
      <BackButton content="cart"/>
    </v-row>
    <component :is="child_component">
      <slot />
    </component>
  </v-container>
</template>

<script>
import BackButton from '../sub-components/BackButton'

export default {
  name: 'StepperTemplate',
  components: {
    BackButton
  },
  props: {
    isBack: Boolean,
    child_component: {
      type: [String, Object],
      default: 'div'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 5px
  background-color white
  min-height 200px
  -webkit-box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
  box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
.header
  padding 30px 40px 0px
</style>