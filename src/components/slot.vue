<template>
  <div class="cc-demos">
    <span v-if="type === 1">
      aaaaaaaaaaa
      <slot></slot>
    </span>

    <span v-if="type === 2">
      bbbbbbbbbbb
      <slot></slot>
    </span>

    <span v-if="type === 3">
      ccccccccccc
      <slot></slot>
    </span>

    <span v-if="type === 4">
      ddddddddddd
    </span>

    <div class="slots">
      <slot name="suff"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Demos',
  props: {
    type: Number
  },
  data () {
    return {}
  },
  created () {}
}
</script>
