<template>
  <v-app>
    <v-main>
      <Stepper previousPage="cart"/>
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
.v-main__wrap
  background-color #FFFAE6
  padding-top 20px
</style>
