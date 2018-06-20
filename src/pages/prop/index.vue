<template>
  <div class="cc-prop animate">
    <cc-img></cc-img>
    <!--  :description="description" -->
    <h1 v-if="show">我想在这儿得到另一种情况的值：{{value}}</h1>
    <hr />
    <el-button @click="showOther">另一种情况</el-button>
    <cc-emit v-if="show" @showValue="showValue"></cc-emit>

    <h2>父组件可以使用 props 把数据传给子组件。vm.$on( event, fn ); // 监听event事件后运行 fn； </h2>
    <h2>子组件可以使用 $emit 触发父组件的自定义事件。vm.$emit( event, arg ) // 触发当前实例上的事件</h2>
  </div>
</template>
<script>
import CcImg from '@/components/cc-img'
import CcEmit from '@/components/emit'
export default {
  name: 'prop',
  components: {
    CcImg,
    CcEmit
  },
  data () {
    return {
      show: false,
      value: 0,
      description: '啊哈，我引入成功了！！'
    }
  },
  methods: {
    showOther () {
      this.show = true
    },
    showValue (v) {
      this.value = v
    }
  }
}
</script>
