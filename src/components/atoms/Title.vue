<template>
  <div>
    <div v-if="size === 'big'" class="big-title">
      <h1 class="primary-color">{{ title }}</h1>
      <div class="line" :style="{width: !lineWidth ? '120%' : lineWidth}" />
    </div>
    <div v-else>
      <h2 class="primary-color">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: String,
    title: String,
    lineWidth: String
  }
}
</script>

<style lang="stylus" scoped>
.line
  height 8px
  background-color #eee
  position relative
  bottom 17px
.big-title 
  height 50px
  h1
    position relative
    z-index 6
    left 5px
</style>