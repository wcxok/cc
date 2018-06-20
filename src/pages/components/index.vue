<template>
  <div>
    <cc-img :description="description" width="200px" showDescription></cc-img>
  </div>
</template>
<script>
import CcImg from '@/components/cc-img'
export default {
  name: 'Components',
  data () {
    return {
      description: null
    }
  },
  components: {
    CcImg
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      // let res = this.$store.dispatch("http/data.json", params)
      // this.description = res.data
    }
  }
}
</script>
