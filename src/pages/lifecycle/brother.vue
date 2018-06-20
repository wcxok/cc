<template>

  <div class="complex">

    <h3>复杂组件</h3>

    <lifecycle-single compNames="cihld1"></lifecycle-single>

    <lifecycle-single compNames="child2"></lifecycle-single>

    <el-button @click="dataVar += 1">complex更新 {{dataVar}}</el-button>

    <el-button @click="handleDestroy">complex销毁</el-button>

    <h2>1. 组件的初始化（mounted之前）分开进行，挂载是从上到下依次进行</h2>
    <h2>2. 当没有数据关联时，兄弟组件之间的更新和销毁是互不关联的</h2>

  </div>

</template>
<script>
import LifecycleSingle from '@/pages/lifecycle/index.vue'
const COMPONENT_NAME = 'complex'
export default {
  name: 'brother',
  data () {
    return {
      dataVar: 1
    }
  },
  beforeCreate () {
    console.log(`--${COMPONENT_NAME}--beforeCreate`)
  },
  created () {
    console.log(`--${COMPONENT_NAME}--created`)
  },
  beforeMount () {
    console.log(`--${COMPONENT_NAME}--beforeMount`)
  },
  mounted () {
    console.log(`--${COMPONENT_NAME}--mounted`)
  },
  beforeUpdate () {
    console.log(`--${COMPONENT_NAME}--beforeUpdate`)
  },
  updated () {
    console.log(`--${COMPONENT_NAME}--updated`)
  },
  beforeDestroy () {
    console.log(`--${COMPONENT_NAME}--beforeDestroy`)
  },
  destroyed () {
    console.log(`--${COMPONENT_NAME}--destroyed`)
  },
  components: {
    LifecycleSingle
  },
  methods: {
    handleDestroy () {
      this.$destroy()
    }
  }
}
</script>
