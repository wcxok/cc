<template>
  <div class="cc-menu">
    <el-aside width="220px" id="el-aside">
    <el-menu default-active="" class="cl-el-menu" @open="handleOpen" @close="handleClose" @select ="handleSelect" :collapse="isCollapse" background-color="rgba(0,0,0,0)"   text-color="#fff" active-text-color="#FFC21A">
      <div v-for="item in  navList" :key="item.path">
        <el-menu-item :index="item.path" v-if="!item.child">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-if="item.child">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group>
          <el-menu-item :index="it.path" v-for="it in item.child" :key="it.path">{{it.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      isCollapse: false,
      navList: [
        {
          name: '生命周期',
          path: '',
          child: [
            {
              name: '单组件',
              path: 'single'
            },
            {
              name: '子组件',
              path: 'comflex'
            },
            {
              name: '兄弟组件',
              path: 'brother'
            }
          ]
        },
        {
          name: '组件',
          path: 'component'
        },
        {
          name: 'slot',
          path: 'slot',
          child: null
        },
        {
          name: 'directive',
          path: 'directive'
        },
        {
          name: 'prop',
          path: 'prop'
        },
        {
          name: 'bus',
          path: 'bus'
        },
        {
          name: 'store',
          path: 'store'
        },
        {
          name: 'filter',
          path: 'filter'
        },
        {
          name: 'permission',
          path: 'permission'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push({
        path: '/' + key
      })
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, path) {
      this.$router.push({
        path: '/' + key
      })
    },
    collapse (data) {
      this.isCollapse = data[0]
      if (this.isCollapse) {
        document.getElementById('el-aside').style.width = '58px'
        document.getElementById('el-main').style.left = '58px'
      } else {
        document.getElementById('el-aside').style.width = '220px'
        document.getElementById('el-main').style.left = '220px'
      }
    }
  }
}
</script>
<style lang="less">
.cl-el-menu {
  border: none;
}
</style>
