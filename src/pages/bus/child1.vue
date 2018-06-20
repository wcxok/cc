<template>
  <div class="">
    我是子组件1

    <h1>获取到2的值为： {{value}}</h1>
  </div>
</template>
<script>
import bus from '@/bus'
export default {
  name: 'bus1',
  data () {
    return {
      bus,
      value: null
    }
  },
  created () {
    bus.$on('child-value', (v) => {
      this.value = v
    })
  },
  methods: {
  }
}
</script>
