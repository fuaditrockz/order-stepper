<template>
  <div>
    <div v-if="size === 'big'" class="big-title">
      <h1>{{ title }}</h1>
      <div class="line" />
    </div>
    <div v-else>
      <h4>Hello World</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: String,
    title: String
  }
}
</script>

<style lang="stylus" scoped>
h1
  color #FF8A00
.line
  height 8px
  width 110%
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