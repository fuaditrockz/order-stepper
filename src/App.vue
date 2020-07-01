<template>
  <v-app>
    <v-main>
      <Stepper />
    </v-main>
  </v-app>
</template>

<script>
import Stepper from './components/Stepper';

export default {
  name: 'App',
  components: {
    Stepper
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
body
  background-color #FFFAE6
  padding 20
p
  color #535c68
.v-main__wrap
  background-color #FFFAE6
  padding-top 50px
.primary-bg-color
  background-color #FF8A00
.primary-color
  color #FF8A00
.disabled-color
  background-color #a4b0be
.spacing-between
  justify-content space-between
  display flex
.zero-padding
  padding 0
</style>
