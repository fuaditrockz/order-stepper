<template>
  <v-col cols="6" v-if="textInputType === 'free-text'">
    <div>
      <textarea
        :id="id"
        :placeholder="placeholder"
        type="text"
        class="free-text input-style"
      />
    </div>
  </v-col>
  <v-col cols="6" v-else>
    <div>
      <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        class="input-style"
      />
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: String,
    id: String,
    textInputType: String
  }
}
</script>

<style lang="stylus" scoped>
.col-6
  padding 0
  margin-bottom 10px
div
  width 92%
  .input-style
    width 100%
    border 1.5px solid #ccc
    padding 15px 15px
  .free-text
    height 150px
  
</style>