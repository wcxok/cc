<template>

  <div class="complex">

    <h3>复杂组件</h3>

    <lifecycle-single compNames="child"></lifecycle-single>
    <el-button @click="showResult">从打印结果可以看出</el-button>
    <div v-if="result">
      <h2>从打印结果可以看出:</h2>

      <p>
        1. 仅当子组件完成挂载后，父组件才会挂载

      </p>
      <p>
        2. 父子组件在data变化中是分别监控的，但是在更新props中的数据是关联的（可实践）

      </p>
      <p>
      3.  销毁父组件时，先将子组件销毁后才会销毁父组件
      </p>
    </div>
  </div>

</template>
<script>
import LifecycleSingle from '@/pages/lifecycle/index.vue'

const COMPONENT_NAME = 'complex'
export default {
  name: 'complex',
  data () {
    return {
      result: false
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
    showResult () {
      this.result = true
    }
  }
}
</script>
