<template>
  <div class="cc-demo">
    <c-demo :type="3">
      <h1>你好</h1>
      <h2 slot="suff">欢迎</h2>
    </c-demo>
  </div>
</template>
<script>
import CDemo from '@/components/slot'
export default {
  name: 'demo',
  data () {
    return {}
  },
  components: {
    CDemo
  }
}
</script>
