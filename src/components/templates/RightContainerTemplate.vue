<template>
  <v-col cols="12" lg="8" class="right-container">
    <component :is="child_component">
      <slot />
    </component>
  </v-col>
</template>

<script>
export default {
  name: 'RightContainerTemplate',
  components: {

  },
  props: {
    child_component: {
      type: [String, Object],
      default: 'div'
    }
  }
}
</script>

<style lang="stylus" scoped>
.right-container
  padding 0 40px 0 45px
  @media screen and (max-width: 600px)
    padding 10px
</style>