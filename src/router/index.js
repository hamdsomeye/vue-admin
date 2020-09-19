import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index'

Vue.use(VueRouter)

export const constantRoutes = [{
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard'),
            name: '首页',
            icon: 'el-icon-s-home',
            meta: { title: '首页', affix: true }
        }]
    },
    {
        path: '',
        component: Layout,
        children: [{
            path: 'mall',
            component: () =>
                import ('@/views/mall'),
            name: '商品管理',
            icon: 'el-icon-shopping-bag-1',
            meta: { title: '商品管理', affix: true }
        }]
    },
    {
        path: '/about',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/About.vue'),
            name: '关于我们',
            icon: 'el-icon-setting',
            meta: { title: 'About', icon: 'About', affix: true }
        }]

    }
]

export const asyncRoutes = []

const createRouter = () => new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router