<template>
  <v-row class="header">
    <BackButton :content="previousPage" :click="clickBack" v-if="isBack"/>
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
      _store_stepper_position: state => state.stepper.stepper_position
    })
  },
  methods: {
    ...mapMutations(['BACK_TO_PREVIOUS_PAGE']),
    clickBack() {
      const {
        _store_stepper_position,
        BACK_TO_PREVIOUS_PAGE
      } = this
      if (_store_stepper_position === 1) {
        BACK_TO_PREVIOUS_PAGE(0)
      } else {
        BACK_TO_PREVIOUS_PAGE(0)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  padding 20px 40px 0
  @media screen and (max-width: 600px)
    padding 40px 10px 0
</style>