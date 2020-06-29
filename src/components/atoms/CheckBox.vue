<template>
  <v-checkbox
    v-model="isChecked"
    color="success"
    @change="clicked"
  >
    <template v-slot:label>
      <h4>{{ title }}</h4>
    </template>
  </v-checkbox>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    title: String,
    isChecked: Boolean
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="stylus" scoped>
h4
  font-weight 500
</style>