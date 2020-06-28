<template>
  <v-container>
    <v-row class="header">
      <v-icon>email</v-icon>
      <h4>Back to {{ previousPage }}</h4>
    </v-row>
    <v-row class="content">
      <v-col cols="8" class="content-container">
        <v-row class="content-header">
          <Title size="big" title="Delivery Details" />
          <div>
            <v-checkbox :label="`Send as dropshipper`" />
          </div>
        </v-row>
      </v-col>
      <v-col cols="4" class="summary-container">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Title from './sub-components/Title'

export default {
  name: 'Stepper',
  components: {
    Title
  },
  props: {
    previousPage: String
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius 5px
  background-color white
  min-height 200px
  -webkit-box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
  box-shadow: 2px 10px 40px 0.3px rgba(255, 138, 0, 0.3)
.header
  padding 10px 40px
.content
  padding 10px 40px
.content-container
  .content-header
    justify-content space-between
.summary-container
  background-color #f44531
</style>