<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
       <div class="sidebar-logo"><span v-if="isCollapse">商城后台管理</span></div>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item v-for="(route,key) in permission_routes" :key="key"  :index="route.path+'/'+route.children[0].path" :class="{'submenu-title-noDropdown':true}">
          <template  v-if="!route.hidden">
            <router-link :to="route.path+'/'+route.children[0].path">
              <i class="sub-el-icon" :class='route.children[0].icon'></i>
              <div class="route-title" v-if="isCollapse">{{route.children[0].name}}</div>
            </router-link>
          </template> 
          
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/style/variables.scss'
import { mapGetters } from 'vuex'
export default {
  naem: "Sidebar",
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      console.log(this.permission_routes)
      const { meta, path } = route
      return path
    },
     isCollapse() {
      return  this.sidebar.opened
    },
    variables() {
      return variables
    },
  },
}
</script>

<style>

</style>