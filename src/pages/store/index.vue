<template>
  <div class="">
    <h2>初始化count值为： {{count}}</h2>
    <el-button @click="getValue">请求子组件</el-button>
    <child v-if="showValue"></child>
  </div>
</template>
<script>
import Child from './child'
export default {
  name: 'store',
  data () {
    return {
      showValue: false
    }
  },
  computed: {
    count () {
      return this.$store.state.tmp.count
    }
  },
  components: {
    Child
  },
  created () {
    // this.$store.dispatch('TMP_INCREASE')
    // console.log(222, this.$store.state.tmp.count)
  },
  methods: {
    getValue () {
      this.showValue = true
    }
  }
}
</script>
