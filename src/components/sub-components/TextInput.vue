<template>
  <v-col cols="6">
    <div>
      <input type="text" id="email" :placeholder="placeholder">
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: String
  }
}
</script>

<style lang="stylus" scoped>
.col-6
  padding 0
  margin-bottom 10px
div
  width 92%
  input
    border 2px solid #ccc
    padding 15px 15px
    width 100%
</style>