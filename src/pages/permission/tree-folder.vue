<template>
  <div class="trees">
    <p>
      <el-checkbox v-model="folder.checked"></el-checkbox>
      <span>{{folder.name}}</span>
      <tree-folder-content :children="folder.children"></tree-folder-content>
    </p>
  </div>
</template>
<script>
export default {
  props: ['folder'],
  name: 'treeFolder',
  beforeCreate () {
    this.$options.components.TreeFolderContent = require('./tree-folder-content.vue').default
  },
  // components: {
  //   TreeFolderContent: () => import('./tree-folder-content')
  // },
  data () {
    return {}
  },
  created () {
    // console.log(1111, this.folder)
  }
}
</script>
<style lang="less">
.trees {
  padding: 10px 0;
  p {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 400px;
    text-align: left;
  }
}
</style>
