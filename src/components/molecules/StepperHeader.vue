<template>
  <v-row class="header" v-if="isBack">
    <BackButton :content="previousPage"/>
  </v-row>
</template>

<script>
import BackButton from '../atoms/BackButton'

export default {
  name: 'StepperHeader',
  components: {
    BackButton
  },
  props: {
    isBack: Boolean,
    previousPage: String
  }
}
</script>

<style lang="stylus" scoped>
.header
  padding 20px 40px 0px
</style>