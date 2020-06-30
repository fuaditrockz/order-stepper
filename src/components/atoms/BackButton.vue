<template>
  <div>
    <a
      href="#"
      @click="clickBack()"
      :style="{width: !buttonWidth ? '158px' : buttonWidth}"
    >
      <v-icon color="#535c68" size="20px">arrow_back</v-icon>
      <h4>Back to {{ content }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    content: String,
    click: Function,
    buttonWidth: String
  },
  methods: {
    clickBack() {
      this.click()
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  float left
  display inline-flex
  justify-content space-between 
  text-decoration none
  padding 5px 12px 5px 5px
  border-radius 5px
  transition: 0.3s;
  &:hover
    background-color rgba(255, 138, 0, 0.2)
  h4
    color #535c68
</style>