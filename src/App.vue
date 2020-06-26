<template>
  <div id="app">
    <Stepper previousPage="cart" />
  </div>
</template>

<script>
import Stepper from './components/Stepper.vue'

export default {
  name: 'App',
  components: {
    Stepper
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fff8d6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>
