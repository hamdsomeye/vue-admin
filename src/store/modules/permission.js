import { asyncRoutes, constantRoutes } from '@/router'

export default {
    state: {
        routers: [],
        addRouters: []
    },
    mutations: {
        SET_ROUTES: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRoutes.concat(routers)

        }
    },
    actions: {
        generateRoutes({ commit }) {
            return new Promise(resolve => {
                let accessedRoutes
                accessedRoutes = asyncRoutes || []
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}