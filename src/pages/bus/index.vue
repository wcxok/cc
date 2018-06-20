<template>
  <div class="">
    我是父组件
    <child-one>
    </child-one>
    <child-two></child-two>
  </div>
</template>
<script>
import ChildOne from './child1'
import ChildTwo from './child2'
export default {
  name: 'bus',
  data () {
    return {
    }
  },
  components: {
    ChildOne,
    ChildTwo
  }
}
</script>
