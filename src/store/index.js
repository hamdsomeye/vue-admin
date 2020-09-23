import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'

export default new Vuex.Store({
    modules: {
        permission,
        app,
        user
    },
    getters
})