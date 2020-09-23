import { setToken, removeToken } from '@/utils/auth'

export default {
    state: {
        user_info: {}
    },
    mutations: {
        setUserInfo(state, data) {
            state.user_info = data
        }
    },
    actions: {
        LoginUserInfo({ commit }, user_info) {
            const data = {
                name: user_info.name,
                pwd: user_info.pwd
            }
            setToken(data)
            commit('setUserInfo', data)
        },
        LogoutUser({ commit }) {
            removeToken()
            commit('setUserInfo', {})
        }
    }
}