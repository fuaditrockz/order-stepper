<template>
  <div>
    <div v-if="textType === 'bold'" class="bold">
      <p>{{ content }}</p>
    </div>
    <div v-else-if="textType === 'italic'" class="italic">
      <p>{{ content }}</p>
    </div>
    <div v-else>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegularText',
  props: {
    textType: String,
    content: String
  }
}
</script>

<style lang="stylus" scoped>
.bold
  font-weight bold
.italic
  font-style italic
</style>