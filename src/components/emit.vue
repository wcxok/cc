<template>
  <div class="">
    {{message}}
    <el-button @click="add">+</el-button>
    <h2>我最终的值为： {{value}}</h2>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: 'everyBody, My name is emit'
    }
  },
  data () {
    return {
      value: 0
    }
  },
  methods: {
    add () {
      this.value++
      this.$emit('showValue', this.value)
    }
  }
}
</script>
