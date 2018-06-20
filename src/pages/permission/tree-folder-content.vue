<template>
  <div class="tree">
    <ul>
      <li v-for="(child, index) in children" :key="index">
        <tree-folder v-if="child.children" :folder="child"></tree-folder>
        <template v-else>
          <el-checkbox v-model="child.checked"></el-checkbox>
          <span>{{child.name}}</span>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
import TreeFolder from './tree-folder'
export default {
  props: ['children'],
  name: 'treeFolderContent',
  components: {
    TreeFolder
  },
  data () {
    return {}
  }
}
</script>
<style lang="less">
.tree {
  ul {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 400px;
    text-align: left;
    li {
      list-style: none;
      padding-left: 20px;
      margin-top: 10px;
    }
  }
}
</style>
