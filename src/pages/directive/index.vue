<template>
  <div class="cc-directive">
    <input v-showtext type="text" v-model="value">
  </div>
</template>
<script>
export default {
  name: 'directive',
  data () {
    return {
      value: null
    }
  }
}
</script>
<style lang="less">
.cc-directive {
  input {
    width: 400px;
    height: 50px;
    font-size: 30px;
  }
}
</style>
