<template>
  <div class="">
    <h1> 原句子：{{str}}</h1>
    <br />
    <h1>现句子： {{str|reverse}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      str: 'This is a sentence'
    }
  }
}
</script>
