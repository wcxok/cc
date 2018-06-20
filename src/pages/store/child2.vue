<template>
  <div>
    <h3>我是请求过之后的数据2： {{count}}</h3>
    <el-button @click="add">+</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    count () {
      return this.$store.state.tmp.count
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      this.$store.dispatch('TMP_INCREASE')
    },
    add () {
      this.fetch()
    }
  }
}
</script>
