<template>
  <div>
    <a href="">
      <v-icon color="#535c68" size="20px">arrow_back</v-icon>
      <h4>Back to {{ content }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    content: String
  }
}
</script>

<style lang="stylus" scoped>
a
  float left
  display inline-flex
  justify-content space-between
  width 158px
  text-decoration none
  padding 5px 12px 5px 5px
  border-radius 5px
  transition: 0.3s;
  &:hover
    background-color rgba(255, 138, 0, 0.2)
  h4
    color #535c68
</style>