<template>
  <v-col cols="12" lg="6" class="zero-padding" v-if="textInputType === 'free-text'">
    <div>
      <textarea
        :id="id"
        :placeholder="placeholder"
        type="text"
        class="free-text input-style mb-3"
      />
    </div>
  </v-col>
  <v-col cols="12" lg="6" class="zero-padding" v-else>
    <div>
      <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        class="input-style mb-3"
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
div
  width 95%
  .input-style
    width 100%
    border 1.5px solid #ccc
    padding 15px 15px
  .free-text
    height 150px
  
</style>