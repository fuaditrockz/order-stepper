<template>
  <div>
    <v-row class="finish-content-wrapper mt-10">
      <Title size="big" title="Thank you" />
    </v-row>
  </div>
</template>

<script>
import Title from '../atoms/Title'

export default {
  name: 'FinishOrder',
  components: {
    Title
  }
}
</script>

<style lang="stylus" scoped>
.finish-content-wrapper
  min-height 400px
</style>