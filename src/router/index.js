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
        path: '/mall',
        component: Layout,
        redirect: '/mall/list',
        name: '商品管理',
        children: [{
            path: 'list',
            component: () =>
                import ('@/views/mall'),
            name: '',
            icon: 'el-icon-shopping-bag-1',
            meta: { title: '商品管理', affix: true }
        }, {
            path: 'create',
            name: '创建商品',
            component: () =>
                import ('@/views/mall/create'),
            meta: { activeMenu: '/mall/list' }
        }]
    },
    {
        path: '/about',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/About.vue'),
            name: '',
            icon: 'el-icon-setting',
            meta: { title: '关于我们', icon: 'About', affix: true }
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