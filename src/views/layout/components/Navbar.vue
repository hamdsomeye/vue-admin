<template>
  <div class="navbar-wrap">
    <div class="toggle-navbar" @click="toggleClick">
      <svg
          :class="{'is-active':isActive}"
          class="hamburger"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
        >
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>

    <div class="navbar-title" v-for="(item,index) in levelList" :key="index">
      <span v-if="index>0">| </span>
      <router-link :to="item.path">{{item.name}}</router-link>
    </div>
    <el-dropdown class="avatar-container hover-effect " trigger="click">
        <div class="avatar-wrapper">
          <img src="http://files.drcloud.me/FsxUk1xSsq2VzXqe9zqvf5Lz0r9v" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/setting/index">
            <el-dropdown-item>admin</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
    export default{
      props: {
        isActive: Boolean,
        default: false
      },
      data() {
        return{
          levelList: null
        }
      },
      created() {
        this.getLevelList()
      },
      watch: {
        $route(route) {
          this.getLevelList()
        }
      },
      methods: {
        toggleClick() {
          this.$store.dispatch('app/toggleSideBar')
        },
        getLevelList() {
          let matched = this.$route.matched.filter(item => item.name)
          this.levelList = matched
        }
      }
    }
</script>

<style lang="scss"  scoped>
  .navbar-wrap{
      position: relative;
      height: 60px;
      line-height: 60px;
      padding: 0 60px;
      border-bottom: 1px solid #f0f1f4;
  }
  .toggle-navbar{
    position: absolute;
    left: 30px;
    top: 0;
    width: 20px;
    height: 20px;
  }
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
  .hamburger.is-active {
    transform: rotate(180deg);
  }
  .avatar-container{
    position: absolute;
    right: 60px;
    top: 10px;
    width: 32px;
    height: 32px;
    .avatar-wrapper{
      width: 100%;
      height: 100%;
      .user-avatar{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
  }
  .navbar-title{
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    font-size: 16px;
  }
</style>
