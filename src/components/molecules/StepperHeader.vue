<template>
  <v-row class="header" v-if="isBack">
    <BackButton :content="previousPage" :click="clickBack"/>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BackButton from '../atoms/BackButton'

export default {
  name: 'StepperHeader',
  components: {
    BackButton
  },
  props: {
    isBack: Boolean,
    previousPage: String
  },
  computed: {
    ...mapState({
      stepperPosition: state => state.stepper.stepper_position
    })
  },
  methods: {
    ...mapMutations(['BACK_TO_PREVIOUS_PAGE']),
    clickBack() {
      if (this.stepperPosition === 1) {
        this.BACK_TO_PREVIOUS_PAGE(0)
      } else {
        this.BACK_TO_PREVIOUS_PAGE(0)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  padding 20px 40px 0px
</style>