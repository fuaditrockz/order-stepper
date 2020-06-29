<template>
  <v-checkbox v-model="checkbox" color="success" @click="check($event)">
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
  data () {
    return {
      checkbox: this.isChecked
    }
  },
  methods: {
    check: (e) => {
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
h4
  font-weight 500
</style>