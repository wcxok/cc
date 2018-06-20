<template>
  <div>
    <!-- 我是请求过之后的数据： {{count}} -->
    <h2>我来二次调用: {{count}}</h2>
    <el-button @click="getValue">调用</el-button>
    <child v-if="showValue"></child>
  </div>
</template>
<script>
import Child from './child2'
export default {
  data () {
    return {
      showValue: false
    }
  },
  computed: {
    count () {
      return this.$store.state.tmp.count || 0
    }
  },
  components: {
    Child
  },
  created () {
    // this.$store.dispatch('TMP_INCREASE')
  },
  methods: {
    getValue () {
      this.showValue = true
    }
  }
}
</script>
