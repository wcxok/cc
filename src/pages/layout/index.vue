<template>
  <div class="cc-wrap">
    <c-header></c-header>
    <div class="cc-body">
      <c-menu></c-menu>
      <div class="cc-content">
        <transition name="fadeInRight">
          <router-view/>
        </transition>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
</template>
<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Menu from './menu.vue'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    CHeader: Header,
    CFooter: Footer,
    CMenu: Menu
  }
}
</script>
<style lang="less">
.cc-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  .cc-header {
    height: 80px;
    background: #111;
    line-height: 80px;
  }
  .cc-body {
    flex: 1;
    display: flex;
    .cc-menu {
      width: 220px;
      background: #111;
    }
    .cc-content {
      flex: 1;
      background: #343434;
      padding: 20px;
    }
  }
  .cc-footer {
    height: 80px;
    background: #111;
    line-height: 80px;
  }
}
</style>
