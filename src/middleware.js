import router from './router'
import store from './store'

router.beforeEach(async(to, from, next) => {
    next()
    store.dispatch('generateRoutes')
})