<template>
  <div class="p20">
    <img :src="src || defaultImg" :alt="alt" :style="`height=${height}; width: ${width}`">
    <h2 v-if="showDescription">{{description}}</h2>
  </div>
</template>
<script>
import defaultImg from '@/assets/logo.png'
export default {
  name: 'CcImg',
  props: {
    src: {
      type: String
    },
    alt: String,
    height: String,
    width: {
      type: String,
      default: '400px'
    },
    description: {
      type: String,
      default: 'OK！ U are so great!'
    },
    showDescription: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      defaultImg
    }
  }
}
</script>
