import router from './router'
import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
    NProgress.start() //开始进度条
    if (getToken()) {
        next()
        store.dispatch('generateRoutes')
        NProgress.done()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
        NProgress.done()
    }
})

router.afterEach(() => {
    NProgress.done()
})