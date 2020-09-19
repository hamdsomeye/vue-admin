<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="device === 'mobile'&& sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container" ref="main">
            <navbar :is-active="sidebar.opened"></navbar>
            <app-main></app-main>
        </div>
       <p  class="footer-container"  :class="footerTop">Copyright ©2020 版本号AAAAAAA </p>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar'
    import Navbar from './components/Navbar'
    import AppMain from './components/AppMain'
    import ResizeMixin from './components/ResizeHandler'

    import { mapState } from 'vuex'
    export default {
        components: {
            Sidebar,
            Navbar,
            AppMain
        },
        mixins: [ResizeMixin],
        computed: {
            ...mapState({
                sidebar: state => state.app.sidebar,
                device: state => state.app.device
            }),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            },
            footerTop() {
                return this.device === 'mobile' ? this.windowHight() : 'footer-top'
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
            },
            windowHight() {
                return (this.$refs.main.offsetHeight < document.documentElement.clientHeight - 100) ? 'footer-top':''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer-container{
        text-align: center;
        font-size: 12px;
        color: #c3c8d5;
        margin-bottom: 10px;
    }
    .footer-top{
        position: absolute;
        bottom: 10px;
        width: 100%;
        margin-top: 120px;
    }
</style>