<template>
  <div class="folder-tree">
    <ul>
      <li v-for="(folder, index) in folders" :key="index">
        <tree-folder :folder="folder"></tree-folder>
      </li>
    </ul>
  </div>
</template>
<script>
import TreeFolder from './tree-folder'
export default {
  name: 'permission',
  data () {
    return {
      folders: [
        {
          name: 'folder1',
          checked: false,
          children: [{
            name: 'folder1 - folder1',
            checked: false,
            children: [{
              checked: false,
              name: 'folder1 - folder1 - folder1'
            }]
          }, {
            name: 'folder1 - folder2',
            checked: false,
            children: [{
              checked: false,
              name: 'folder1 - folder2 - folder1'
            }, {
              checked: false,
              name: 'folder1 - folder2 - folder2'
            }]
          }]
        },
        {
          name: 'folder 2',
          checked: false,
          children: [{
            checked: false,
            name: 'folder2 - folder1',
            children: [{
              checked: false,
              name: 'folder2 - folder1 - folder1'
            }]
          }, {
            checked: false,
            name: 'folder2 - folder2',
            children: [{
              checked: false,
              name: 'folder2-content1'
            }]
          }]
        },
        {
          name: 'folder 3',
          checked: false,
          children: [{
            checked: false,
            name: 'folder3 - folder1',
            children: [{
              checked: false,
              name: 'folder3 - folder1 - folder1'
            }]
          }, {
            checked: false,
            name: 'folder3 - folder2',
            children: [{
              checked: false,
              name: 'folder3-content1'
            }]
          }]
        }
      ]
    }
  },
  components: {
    TreeFolder
  }
}
</script>
<style lang="less">
.folder-tree {
  text-align: left;
}
</style>
