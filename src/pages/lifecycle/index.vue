<template>
  <div class="life-cycle">
    <h3>单组件</h3>

    <el-button @click="dataVar += 1">更新 {{dataVar}}</el-button>

    <el-button @click="handleDestroy">销毁</el-button>

    <!-- <h2>初始化和销毁时的生命钩子函数均只会执行一次，beforeUpdate/updated可多次执行</h2> -->

  </div>
</template>
<script>
import {
  cloneDeep
} from 'lodash'
export default {
  name: 'single',
  props: {
    compNames: {
      type: String,
      default: 'single'
    }
  },
  data () {
    return {
      dataVar: 1,
      compName: cloneDeep(this.compNames)
    }
  },
  watch: {
    compNames (newv, oldv) {
      console.log(newv, oldv)
      this.compName = cloneDeep(newv)
    }
  },
  beforeCreate () {
    this.compName = 'single'
    console.log(`--${this.compName}--beforeCreate`)
  },
  created () {
    console.log(`--${this.compName}--created`)
  },
  beforeMount () {
    console.log(`--${this.compName}--beforeMount`)
  },
  mounted () {
    console.log(`--${this.compName}--mounted`)
  },
  beforeUpdate () {
    console.log(`--${this.compName}--beforeUpdate`)
  },
  updated () {
    console.log(`--${this.compName}--updated`)
  },
  beforeDestroy () {
    console.log(`--${this.compName}--beforeDestroy`)
  },
  destroyed () {
    console.log(`--${this.compName}--destroyed`)
  },
  methods: {
    handleDestroy () {
      this.$destroy()
    }
  }
}
</script>
