<template>
  <v-container>
    <v-row class="header">
      <h4>Back to {{ previousPage }}</h4>
    </v-row>
    <v-row class="content">
      <v-col cols="8" class="content-container">
        <v-row>
          <h1>Delivery Details</h1>
        </v-row>
      </v-col>
      <v-col cols="4" class="summary-container">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    previousPage: String
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 8px
  background-color white
  min-height 200px
  -webkit-box-shadow: 3px 6px 17px -3px rgba(213, 155, 46, 0.61)
  box-shadow: 3px 6px 17px -3px rgba(213, 155, 46, 0.61)
.header
  padding 10px 40px
.content
  padding 10px 40px
.summary-container
  background-color #f44531
</style>