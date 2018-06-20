<template>
  <div class="">
    我是子组件2
    <el-button @click="needChildvalue">把值传给1</el-button>
  </div>
</template>
<script>
import bus from '@/bus'
export default {
  name: 'bus2',
  data () {
    return {
      bus,
      value: 'NB'
    }
  },
  methods: {
    needChildvalue () {
      bus.$emit('child-value', this.value)
    }
  }
}
</script>
